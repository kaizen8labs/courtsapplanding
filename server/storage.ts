import { eq } from "drizzle-orm";
import { db } from "./db";
import { users, contactSubmissions, type User, type InsertUser, type ContactFormData, type ContactSubmission } from "@shared/schema";

// Extend the storage interface with contact form methods
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form methods
  getContactSubmissions(): Promise<ContactSubmission[]>;
  getContactSubmission(id: number): Promise<ContactSubmission | undefined>;
  createContactSubmission(data: ContactFormData): Promise<ContactSubmission>;
  deleteContactSubmission(id: number): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions);
  }

  async getContactSubmission(id: number): Promise<ContactSubmission | undefined> {
    const [submission] = await db
      .select()
      .from(contactSubmissions)
      .where(eq(contactSubmissions.id, id));
    return submission || undefined;
  }

  async createContactSubmission(data: ContactFormData): Promise<ContactSubmission> {
    const createdAt = new Date().toISOString();
    const [submission] = await db
      .insert(contactSubmissions)
      .values({
        ...data,
        createdAt
      })
      .returning();
    return submission;
  }

  async deleteContactSubmission(id: number): Promise<boolean> {
    const [deleted] = await db
      .delete(contactSubmissions)
      .where(eq(contactSubmissions.id, id))
      .returning();
    return !!deleted;
  }
}

export const storage = new DatabaseStorage();

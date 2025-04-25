import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate request body using the schema
      const validatedData = contactFormSchema.parse(req.body);
      
      // Save the contact submission to storage
      const submission = await storage.createContactSubmission(validatedData);
      
      // Return success response
      res.status(201).json({
        message: "Contact form submission successful",
        data: submission
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Return validation errors
        const validationError = fromZodError(error);
        res.status(400).json({
          message: "Validation error",
          errors: validationError.details
        });
      } else {
        // Return generic server error
        console.error("Error handling contact form submission:", error);
        res.status(500).json({
          message: "An error occurred while processing your request"
        });
      }
    }
  });
  
  // Get all contact form submissions
  app.get('/api/contact-submissions', async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      console.error("Error retrieving contact submissions:", error);
      res.status(500).json({
        message: "An error occurred while retrieving contact submissions"
      });
    }
  });
  
  // Get a specific contact form submission by ID
  app.get('/api/contact-submissions/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }
      
      const submission = await storage.getContactSubmission(id);
      if (!submission) {
        return res.status(404).json({ message: "Submission not found" });
      }
      
      res.status(200).json(submission);
    } catch (error) {
      console.error("Error retrieving contact submission:", error);
      res.status(500).json({
        message: "An error occurred while retrieving the contact submission"
      });
    }
  });

  // Delete a contact form submission
  app.delete('/api/contact-submissions/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }
      
      const deleted = await storage.deleteContactSubmission(id);
      if (!deleted) {
        return res.status(404).json({ message: "Submission not found" });
      }
      
      res.status(200).json({ message: "Submission deleted successfully" });
    } catch (error) {
      console.error("Error deleting contact submission:", error);
      res.status(500).json({
        message: "An error occurred while deleting the contact submission"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

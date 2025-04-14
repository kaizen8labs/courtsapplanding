# Full Stack Web Application

This is a full-stack web application built with Node.js, React, PostgreSQL, and Drizzle ORM.

## Features

- Modern React frontend
- Node.js backend with TypeScript
- PostgreSQL database with Drizzle ORM
- Docker and Docker Compose support for easy deployment

## Prerequisites

- Node.js (v18+)
- Docker and Docker Compose (for containerized deployment)
- PostgreSQL (if running locally without Docker)

## Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory with:
   ```
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Using Docker

1. Build and start the containers:
   ```bash
   docker-compose up -d
   ```

2. The application will be available at http://localhost:5000

## Database Management

- Push schema changes to the database:
  ```bash
  npm run db:push
  ```

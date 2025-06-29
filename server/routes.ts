import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // 🔹 POST /api/contact – Handle contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({
        success: true,
        message: "Message sent successfully!",
        contact
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to send message"
        });
      }
    }
  });

  // 🔹 GET /api/contacts – Fetch all contact submissions (for admin)
  app.get("/api/contacts", async (_req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (_error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch contacts"
      });
    }
  });

  // 🔹 (Optional) GET /api/health – Basic health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // 🔹 Create and return HTTP server for custom port binding
  const httpServer = createServer(app);
  return httpServer;
}


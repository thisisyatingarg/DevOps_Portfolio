import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Logging helper (used in index.ts)
export const log = (...args: any[]) => {
  console.log("[server]", ...args);
};

// ✅ Serve static frontend (used in prod)
export const serveStatic = (app: Express): void => {
  const distPath = path.resolve(__dirname, "../dist/public");
  const indexHtml = fs.readFileSync(path.resolve(distPath, "index.html"), "utf-8");

  app.use(express.static(distPath));

  app.get("*", (_req, res) => {
    res.status(200).set({ "Content-Type": "text/html" }).end(indexHtml);
  });
};

// ✅ Vite dev middleware setup (only for development)
export const setupVite = async (app: Express, server: Server): Promise<void> => {
  const vite = await createViteServer({
    ...viteConfig,
    server: {
      middlewareMode: true
    },
    appType: "custom",
  });

  app.use(vite.middlewares);

  log("Vite dev middleware attached");
};


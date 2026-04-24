import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    // Server-side validation
    const errors: Record<string, string> = {};

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      errors.name = "Full name is required and must be at least 2 characters.";
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "A valid professional email address is required.";
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      errors.message = "Please provide more details (at least 10 characters).";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ 
        success: false, 
        message: "Validation failed. Please correct the errors below.", 
        errors 
      });
    }

    // Success logic (e.g., save to DB or send email - simulating success here)
    console.log("Contact form submission received:", { name, email, message });
    
    res.status(200).json({ 
      success: true, 
      message: "Thank you for reaching out! Our team will contact you within 24 hours." 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

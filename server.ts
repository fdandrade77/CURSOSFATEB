import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

// API routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Custom slug routes - Serve "/public/terapeuta-crianca/index.html" directly for both development and production
app.get(["/terapeuta-crianca", "/terapeuta-crianca/"], (req, res) => {
  let filePath = path.join(process.cwd(), "public", "terapeuta-crianca", "index.html");
  if (process.env.NODE_ENV === "production") {
    const distPath = path.join(process.cwd(), "dist", "terapeuta-crianca", "index.html");
    if (fs.existsSync(distPath)) {
      filePath = distPath;
    }
  }
  res.sendFile(filePath);
});

app.get(["/terapeuta-parental", "/terapeuta-parental/"], (req, res) => {
  let filePath = path.join(process.cwd(), "public", "terapeuta-parental", "index.html");
  if (process.env.NODE_ENV === "production") {
    const distPath = path.join(process.cwd(), "dist", "terapeuta-parental", "index.html");
    if (fs.existsSync(distPath)) {
      filePath = distPath;
    }
  }
  res.sendFile(filePath);
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(Number(PORT), "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});

export default app;


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
    target: "es2020",
  },
  server: {
    port: 5173,
    // During `npm run dev`, forward API calls to a local `wrangler dev` instance.
    proxy: {
      "/api": "http://localhost:8787",
    },
  },
});

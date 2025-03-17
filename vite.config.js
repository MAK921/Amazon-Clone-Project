import { defineConfig } from "vite";
import compression from "vite-plugin-compression";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

export default defineConfig({
  base: "/",
  plugins: [react(), compression()],
  build: {
    chunkSizeWarningLimit: 1500,
  },
});

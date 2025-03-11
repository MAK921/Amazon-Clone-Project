import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

export default defineConfig({
  // base: "/Amazon-Clone-Project/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1024,
  },
});

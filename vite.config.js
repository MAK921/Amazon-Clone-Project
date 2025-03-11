import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

export default defineConfig({
  //  base: "/Amazon-Clone-Project/",
  plugins: [react()],
  d: {
    chunkSizeWarningLimit: 1000, // Set to 1000KB (1MB)
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

export default defineConfig({
  // base: "/Amaz/on-Clone-Project/",
  plugins: [react()],

 ({
	manualChunks: {
		lodash: ['lodash']
	}
});
});

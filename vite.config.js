// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/

// export default defineConfig({
//   //  base: "/Amazon-Clone-Project/",
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase the warning limit to 1000 KB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("lodash")) {
              return "lodash"; // Separate lodash into its own chunk
            }
            if (id.includes("react")) {
              return "react-vendor"; // Separate React libraries
            }
            return "vendor"; // General chunk for other large dependencies
          }
        },
      },
    },
    // minify: "terser", // Better minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs
        drop_debugger: true,
      },
    },
  },
  optimizeDeps: {
    include: ["lodash-es"], // Use tree-shakable lodash-es instead of full lodash
  },
});

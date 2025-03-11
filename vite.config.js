// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/

// export default defineConfig({
//   // base: "/Amaz/on-Clone-Project/",
//   plugins: [react()],

//   vite: {
//     build: {
//       rollupOptions: {
//         output: {
//           manualChunks(id) {
//             if (id.includes("node_modules")) {
//               return id
//                 .toString()
//                 .split("node_modules/")[1]
//                 .split("/")[0]
//                 .toString();
//             }
//           },
//         },
//       },
//       chunkSizeWarningLimit: 1600,
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // base: "/Amaz/on-Clone-Project/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("lodash")) {
              return "lodash";
            }
            return "vendor"; // General chunk for other node_modules
          }
        },
      },
    },
  },
});

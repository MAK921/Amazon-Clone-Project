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

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     chunkSizeWarningLimit: 1000, // Increase the warning limit to 1000 kB (optional)
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes("node_modules")) {
//             if (id.includes("lodash")) {
//               return "lodash"; // Separate chunk for lodash
//             }
//             if (id.includes("react")) {
//               return "react-vendor"; // Separate chunk for React-related dependencies
//             }
//             return "vendor"; // General chunk for other large dependencies
//           }
//         },
//       },
//     },
//   },
//   optimizeDeps: {
//     include: ["lodash-es"], // Use tree-shakable lodash-es instead of full lodash
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Amazon-Clone-Project/", // Change this if your project has a subdirectory
  plugins: [react()],
});


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import mix from "vite-plugin-mix";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    // mix({
    //   handler: "./src/api/index.ts",
    // }),
  ],
});

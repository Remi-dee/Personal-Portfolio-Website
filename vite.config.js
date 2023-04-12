import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@Asset": path.resolve(__dirname, "src/Asset"),
      "@": path.resolve(__dirname, "./src"),
    },
  },

  plugins: [react()],
});

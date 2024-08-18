import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://danielremoquillo.github.io/react-try-and-learn-todo/", // replace with your repo name
  build: {
    outDir: "dist", // default output directory
  },
  plugins: [react(), svgr()],
  server: {
    port: 3000,
  },
});

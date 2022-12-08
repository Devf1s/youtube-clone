import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/youtube-clone/#', // Base url of the website
  plugins: [react()]
});
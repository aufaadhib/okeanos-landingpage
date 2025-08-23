import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  preview: {
    allowedHosts: [".ngrok-free.app"], // semua subdomain ngrok-free.app diizinkan
  },
  plugins: [react(), tailwindcss()],
});

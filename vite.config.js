import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://3.79.74.97/v1",
      "/search": "https://geocode.maps.co",
      "/maps": "https://maps.googleapis.com",
    },
  },
  plugins: [react()],
});

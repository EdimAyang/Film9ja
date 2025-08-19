import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePWA({
      // registerType: "autoUpdate",
      // includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      // manifest: {
        // name: "film9ja",
        // short_name: "film9ja",
        // description:
          // // "Film9ja is an app that offers the latest details on trending movies and tv shows, with the abilit to watch the latest trailers",
        // icons: [
          // {
            // src: "/android-chrome-192x192.png",
            // sizes: "192x192",
            // type: "image/png",
          // },
          // {
            // src: "/android-chrome-512x512.png",
            // sizes: "512x512",
            // type: "image/png",
            // purpose: 'mask icon'
          // },
          // {
            // src: "/apple-touch-icon.png",
            // sizes: "180x180",
            // type: "image/png",
            // purpose: "apple touch icon",
          // },
        // ],
        // display: "standalone",
        // scope: "/",
        // start_url: "/",
        // orientation: "portrait",
      // },
    // }),
  ],
});

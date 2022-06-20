import { defineConfig } from "vite";
import { resolve } from "path";
import { VitePWA } from "vite-plugin-pwa";

import Vue from "@vitejs/plugin-vue";
import VueI18n from "@intlify/vite-plugin-vue-i18n";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      "@src": resolve(__dirname, "src"),
      "vue-i18n": "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js"
    },
  },
  plugins: [
    Vue(),
    VueI18n({
      include: resolve(__dirname, "./src/locales/*.yaml"),
      compositionOnly: true
    }),
    VitePWA({
      manifest: {
        name: "IRO - Amazing Color Tools",
        short_name: "IRO",
        theme_color: "#212121",
        // registerType: "autoUpdate",
        filename: 'claims-sw.js',
        strategies: 'injectManifest',
        injectManifest: {
          globPatterns: ['**/*'],
          maximumFileSizeToCacheInBytes: 100 * 1024 * 1024,
        },
        includeAssets: ["/favicon.ico"],
        icons: [
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          },
        ],
        devOptions: {
          enabled: true,
          /* when using generateSW the PWA plugin will switch to classic */
          type: 'module',
          navigateFallback: 'index.html',
        },
      },
    }),
  ],
});

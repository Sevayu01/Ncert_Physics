import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: {
      theme_color: "#3367D6",
      icons: [
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png", 
        }
      ],
      name: 'Physics World',
      short_name: 'Physics World',


    },
 // precache all files in the out dir
    includeAssets: [
      "**/*",
      "/favicon.ico",
      "/assets/*.*",
      "/**/*.*",
      "/*.*",
      "/*/*.*",
      "/*/*/*.*",
      "/*/*.*",
      
    ],
    workbox: {
      runtimeCaching: [
        {
          urlPattern: ({ url }) => {
            return url.pathname.startsWith("/");
          },
          handler: "CacheFirst",
          options: {
            cacheName: "api-cache",
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
      clientsClaim: true,
      skipWaiting: true
    },

    registerType: 'autoUpdate',

    devOptions: {
      enabled: true
    }
  })],
})

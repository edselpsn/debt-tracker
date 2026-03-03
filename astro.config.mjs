// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import vitePwa from '@vite-pwa/astro'
import node from '@astrojs/node'

export default defineConfig({
  output: 'server',

  adapter: node({
  mode: 'standalone'
  }),  

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    vitePwa({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Debt Tracker',
        short_name: 'DebtTracker',
        description: 'Couple Debt Payoff Tracker',
        theme_color: '#111827',
        background_color: '#111827',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
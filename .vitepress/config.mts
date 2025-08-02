import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
import { generateSidebar } from '../plugins/sidebar'

export default defineConfig({
  title: 'YY',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'About', link: '/about'}
    ],
    sidebar: {
      '/diary/': generateSidebar('diary')
    },
  },
  ignoreDeadLinks: true
})

  ignoreDeadLinks: true
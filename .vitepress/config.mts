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
      '/diary/': generateSidebar('diary'),
      '/docs/vitepress': generateSidebar('docs/vitepress', 'docs/'),
      '/projects/det120': generateSidebar('projects/det120', 'projects/'),
    },
    search: {
      provider: 'local'
    }
  },
  ignoreDeadLinks: true,
  lastUpdated: true,
})
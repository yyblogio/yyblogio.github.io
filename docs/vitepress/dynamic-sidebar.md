# Dynamic Sidebar

VitePress uses a static sidebar configuration by default. You can refer to [this](https://vitepress.dev/reference/default-theme-sidebar#multiple-sidebars).

However, since the [config file](https://github.com/yyblogio/yyblogio.github.io/blob/main/.vitepress/config.mts) (`config.mts`) is just a JavaScript file, we can call functions to make it dynamic.  
I used ChatGPT to generate [this file](https://github.com/yyblogio/yyblogio.github.io/blob/main/plugins/sidebar.ts) and put it into `plugins/sidebar.ts`.

Here's how I call the function in `config.mts`:

```js
import { generateSidebar } from '../plugins/sidebar'

export default defineConfig({
  title: 'YY',
  themeConfig: {
    sidebar: {
      '/diary/': generateSidebar('diary'),
      '/docs/vitepress': generateSidebar('docs/vitepress', 'docs/'),
    },
  },
})
```

Remember to pass the second parameter into the function(`generateSidebar`) if you use a nested dictionary.


Finally, I got a dynamic sidebar, so I can add any Markdown files to the directory without modifying the config file.
That’s cool.
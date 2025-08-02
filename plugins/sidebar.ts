import fs from 'fs'
import path from 'path'

interface SidebarItem {
  text: string
  link?: string
  items?: SidebarItem[]
}

export function generateSidebar(dir: string, base = '/') {
  const fullPath = path.resolve(process.cwd(), dir)
  return walkDir(fullPath, base)
}

function walkDir(dir: string, base: string): SidebarItem[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  const items: SidebarItem[] = []

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue // skip hidden files
    const fullPath = path.join(dir, entry.name)
    const relativePath = path.relative(path.resolve(process.cwd(), 'docs'), fullPath)
    const linkPath = path.join(base, relativePath).replace(/\\/g, '/').replace(/\.md$/, '')

    if (entry.isDirectory()) {
      const children = walkDir(fullPath, base)
      if (children.length > 0) {
        items.push({
          text: entry.name,
          items: children
        })
      }
    } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name.toLowerCase() !== 'readme.md') {
      items.push({
        text: entry.name.replace(/\.md$/, ''),
        link: `${linkPath}`
      })
    }
  }

  // sort by text
  items.sort((a, b) => a.text.localeCompare(b.text))
  console.log(items)

  return items
}
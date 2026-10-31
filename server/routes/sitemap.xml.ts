// Menghasilkan rayhank.com/sitemap.xml dari daftar seo.sitemap di sitecontent.ts.
import { siteContent } from '../../sitecontent'

export default defineEventHandler((event) => {
  const baseUrl = siteContent.seo.siteUrl.replace(/\/$/, '')

  const urls = siteContent.seo.sitemap
    .map(route => [
      '  <url>',
      `    <loc>${baseUrl}${route}</loc>`,
      '    <changefreq>monthly</changefreq>',
      `    <priority>${route === '/' ? '1.0' : '0.3'}</priority>`,
      '  </url>',
    ].join('\n'))
    .join('\n')

  setHeader(event, 'content-type', 'application/xml')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
})

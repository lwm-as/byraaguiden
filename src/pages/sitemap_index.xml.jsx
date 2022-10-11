import React from 'react'

export default function Sitemap() {
  return <></>
}

function createSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <sitemap>
          <loc>https://wp.xn--byrguiden-72a.no/sitemap-category.xml</loc>
       </sitemap>
       <sitemap>
          <loc>https://wp.xn--byrguiden-72a.no/sitemap-page.xml</loc>
       </sitemap>
       <sitemap>
          <loc>https://wp.xn--byrguiden-72a.no/sitemap-post.xml</loc>
       </sitemap>
    </sitemapindex>`
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/xml')
  res.write(createSitemap())
  res.end()

  return {
    props: {}
  }
}

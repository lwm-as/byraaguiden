import React from 'react'

import graphql from '../lib/api'
import { PAGE_SITEMAP_QUERY } from '../lib/queries/sitemap'

export default function PageSitemap() {
  return <></>
}

function createSitemap(pages) {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
  pages.forEach(({ node }) => {
    if (node.seo.metaRobotsNoindex === 'noindex') return

    const slug = node.slug === 'homepage' ? '' : node.slug
    sitemap += `<url>
            <loc>https://wp.xn--byrguiden-72a.no/${decodeURIComponent(slug)}</loc>
        </url>`
  })

  sitemap += `</urlset>`

  return sitemap
}

export async function getServerSideProps({ res }) {
  const { pages } = await graphql(PAGE_SITEMAP_QUERY)

  res.setHeader('Content-Type', 'text/xml')
  res.write(createSitemap(pages.edges))
  res.end()

  return {
    props: {}
  }
}

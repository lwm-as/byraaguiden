import React from 'react'

import graphql from '../lib/api'
import { POSTS_SITEMAP_QUERY } from '../lib/queries/sitemap'

export default function PostSitemap() {
  return <></>
}

function createSitemap(posts) {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
  posts.forEach(({ node }) => {
    if (node.seo.metaRobotsNoindex === 'noindex') return

    const date = new Date(node.modified).toISOString()
    sitemap += `<url>
            <loc>https://wp.xn--byrguiden-72a.no/${decodeURIComponent(node.slug)}</loc>
            <lastmod>${date}</lastmod>
        </url>`
  })

  sitemap += `</urlset>`

  return sitemap
}

export async function getServerSideProps({ res }) {
  const { posts } = await graphql(POSTS_SITEMAP_QUERY)

  res.setHeader('Content-Type', 'text/xml')
  res.write(createSitemap(posts.edges))
  res.end()

  return {
    props: {}
  }
}

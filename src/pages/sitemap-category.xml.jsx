import React from 'react'

import graphql from '../lib/api'
import { CATEGORIES_SITEMAP_QUERY } from '../lib/queries/sitemap'

export default function CategorySitemap() {
  return <></>
}

function createSitemap(categories) {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
  categories.forEach(category => {
    if (category.seo.metaRobotsNoindex === 'noindex') return

    sitemap += `<url>
            <loc>https://wp.xn--byrguiden-72a.no/${decodeURIComponent(category.slug)}</loc>
        </url>`
  })

  sitemap += `</urlset>`

  return sitemap
}

export async function getServerSideProps({ res }) {
  const { categories } = await graphql(CATEGORIES_SITEMAP_QUERY)

  res.setHeader('Content-Type', 'text/xml')
  res.write(createSitemap(categories.nodes))
  res.end()

  return {
    props: {}
  }
}

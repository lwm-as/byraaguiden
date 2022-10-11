export const CATEGORIES_SITEMAP_QUERY = ` 
{
  categories(where: { hideEmpty: true }, first: 100) {
    nodes {
      slug
      seo {
        metaRobotsNoindex
      }
    }
  }
}
`

export const PAGE_SITEMAP_QUERY = `
{
  pages(first: 10000) {
    edges {
      node {
        slug
        seo {
          metaRobotsNoindex
        }
      }
    }
  }
}
`

export const POSTS_SITEMAP_QUERY = `
{
  posts(first: 10000) {
    edges {
      node {
        slug
        categories {
          nodes {
            slug
          }
        }
        modified
        seo {
          metaRobotsNoindex
        }
      }
    }
  }
}
`

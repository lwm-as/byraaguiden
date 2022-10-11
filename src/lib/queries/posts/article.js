import MENU_FRAGMENT from '../../fragments/menus'
import SEO_FRAGMENT from '../../fragments/seo'

export const GET_ARTICLE_BY_ID = `
query getArticle($id: ID!) {
  post(id: $id, idType: SLUG) {
    ${SEO_FRAGMENT}
    title
    content(format: RENDERED)
    date: modifiedGmt
    excerpt
    featuredImage {
      node {
        sourceUrl
        caption
        mediaDetails {
          width
          height
        }
      }
    }
    ctaDisabled {
      ctaDisabled
    }
    customToc {
      hascustomtoc
      content {
        contentTitle
      }
    }
    customRA {
      hasra
      customArticles {
        customArticle {
          ... on Post {
            title
            slug
            excerpt
            featuredImage {
              node {
                sourceUrl
                altText
                mediaDetails {
                  width
                  height
                }
              }
            }
          }
        }
      }   
    }    
    categories(where: {orderby: TERM_ORDER}) {
      nodes {
        name
        slug
        posts(first: 4, where: {status: PUBLISH}) {
          nodes {
            title
            slug
            excerpt
            featuredImage {
              node {
                sourceUrl
                altText
                mediaDetails {
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
  ${MENU_FRAGMENT}
}`

export const GET_ALL_ARTICLE_SLUGS = `
query getArticleUrls($first: Int) {
  posts(where: { status: PUBLISH }, first: $first) {
    nodes {
      slug
      categories {
        nodes {
          slug
        }
      }
    }
  }
}`

import MENU_FRAGMENT from '../../fragments/menus'
import SEO_FRAGMENT from '../../fragments/seo'

export const GET_POST_SLUGS = `
query getPostSlugs {
  posts(first: 25, where: {categoryNotIn: "1"}) {
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

export const GET_POST = `
  query getPost($id: ID!) {
    post(id: $id, idType: SLUG) {
      title
      modifiedGmt
      excerpt
      content(format: RENDERED)
      author {
        node {
          name
          firstName
          avatar {
           url
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
          caption(format: RENDERED)
        }
      }
     ctaDisabled {
      ctaDisabled
    }
      categories {
        nodes {
          name
          slug
        }
      }
      categorypage {
        herotitle
        herosubtitle
        articletitle
      }
      providers {
        providers {
          provider {
            ... on Provider {
              id
              providersInfo {
                name
                logo {
                  sourceUrl
                }
                providerButton
                contact
                websiteLink
                description
                city {
                  name
                }
                employeeCount
                establishedYear
                focusareas {
                  name
                }
                placeid
              }
            }
          }
        }
      }
      ${SEO_FRAGMENT}
    }
    category(id: "sted", idType: SLUG) {
        name
      posts(first: 1000, where: {orderby: {field: SLUG, order: ASC}}) {
        nodes {
          slug
          tags {
            nodes {
              name
            }
          }
          categories {
            nodes {
              slug
            }
          }
        }
      }
    }
    ${MENU_FRAGMENT}
  }`

import MENU_FRAGMENT from '../../fragments/menus'
import SEO_FRAGMENT from '../../fragments/seo'
import IMAGE_FRAGMENT from '../../fragments/image'

export const SUCCCESS_PAGE_QUERIES = `
  query getSuccessPage($catId: String!){
    page(id: "suksess", idType: URI) {
      ${SEO_FRAGMENT}
    }
    posts(first: 3, where: {categoryName: $catId, status: PUBLISH}) {
      nodes {
        slug
        uri
        title
        excerpt
        featuredImage {
          node {
            ${IMAGE_FRAGMENT}
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
    ${MENU_FRAGMENT}
  }
  `

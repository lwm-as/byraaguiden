import IMAGE_FRAGMENT from '../../fragments/image'
import MENU_FRAGMENT from '../../fragments/menus'
import SEO_FRAGMENT from '../../fragments/seo'

export const GET_HUMAN_SITEMAP_PAGE = `
  query getMiscPage($id: ID!) {
    page(id: $id, idType: URI) {
      title
      content
      heroData {
        title
        subtitle
        image {
          ${IMAGE_FRAGMENT}
        }
      }
      ${SEO_FRAGMENT}
    }
    categories(where: { hideEmpty: true }) {
      edges {
        node {
          name
          slug
          posts(first: 1000, where: {status: PUBLISH}) {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      }
    }
    pages(first: 1000, where: {status: PUBLISH}) {
      edges {
        node {
          title
          slug
          ${SEO_FRAGMENT}
        }
      }
    }
    ${MENU_FRAGMENT}
  }`

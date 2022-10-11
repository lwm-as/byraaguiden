import IMAGE_FRAGMENT from '../../fragments/image'
import MENU_FRAGMENT from '../../fragments/menus'
import SEO_FRAGMENT from '../../fragments/seo'

export const GET_COOKIES_PAGE = `
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
    ${MENU_FRAGMENT}
  }`

import IMAGE_FRAGMENT from '../../fragments/image'
import MENU_FRAGMENT from '../../fragments/menus'
import SEO_FRAGMENT from '../../fragments/seo'

export const GET_ABOUT_PAGE = `
  query getMiscPage($id: ID!) {
    page(id: $id, idType: URI) {
        aboutUsFields {
      aboutUsHeroTitle
      aboutUsHeroContentText
      aboutUsHeroImage {
          ${IMAGE_FRAGMENT}
      }
      aboutUsContentTitle
      aboutUsContentText
      aboutUsContentImage {
           ${IMAGE_FRAGMENT}
      }
      teamMember {
        teamMemberName
        teamMemberPosition
        teamMemberImage {
            ${IMAGE_FRAGMENT}
        }
      }
      aboutUsSectionTitle
      aboutUsSectionText
      aboutUsSectionImage {
         ${IMAGE_FRAGMENT}
      }
    }
         slider {
      sliderContainer {
        ... on Page_Slider_SliderContainer_SliderElement {
          image {
           ${IMAGE_FRAGMENT}

          }
          imageUrl {
            url
          }
          fieldGroupName
        }
      }
    }
      title
      content
      heroData {
        title
        subtitle
        image {
          ${IMAGE_FRAGMENT}
        }
      }
      acf {
        faq {
          question
          answer
        }
      }
      ${SEO_FRAGMENT}
    }
    ${MENU_FRAGMENT}
  }`

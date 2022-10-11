import MENU_FRAGMENT from '../../fragments/menus'
import SEO_FRAGMENT from '../../fragments/seo'
import IMAGE_FRAGMENT from '../../fragments/image'

export const GET_HOMEPAGE = `
  query getHomepage{
    page(id: "homepage", idType: URI) {
      featuredImage {
        node {
          sourceUrl
        }
      }
      homepage {
        herotitle
        herosubtitle
        categoriestitle
      }
      homeSection {
        sectionImage {
          ${IMAGE_FRAGMENT}
        }
        sectionContent
      }
      ${SEO_FRAGMENT}
    }
    categories(where: {hideEmpty: true}, first: 50) {
      nodes {
        slug
        name
        servicePreviewDescription {
           serviceDescription
        }
        taxonomyIcon {
          iconname
        }
      }
    }
    category(id: "artikler", idType: SLUG) {
      posts(first: 3, where: {status: PUBLISH}) {
        nodes {
          title
          slug
          excerpt
          featuredImage {
            node {
              sourceUrl
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
    cityPosts: posts(first: 1000 where: {status: PUBLISH, categoryName: "Sted", orderby: {field: TITLE, order: ASC}}) {
      nodes {
        title
        slug
        categories {
          nodes {
            name
          }
        }
      }
    }
    ${MENU_FRAGMENT}
  }`

export const GET_REGISTERPAGE_BY_URI = `
  query getPageByUri($id: ID!){
    page(id: $id, idType: URI) {
      content
      registerCompany {
        title
        logoslider {
          logo {
            sourceUrl
          }
        }
        registerfaq {
          question
          answer
        }
      }
      ${SEO_FRAGMENT}
    }
    ${MENU_FRAGMENT}
  }`

export const GET_MISCPAGE_BY_URI = `
  query getPageByUri($id: ID!){
    page(id: $id, idType: URI) {
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      ${SEO_FRAGMENT}
    }
    ${MENU_FRAGMENT}
  }`

export const GET_FAQ_BY_URI = `
  query getPageByUri($id: ID!){
    page(id: $id, idType: URI) {
      title
      content
      faq {
        faq {
          question
          answer
        }
      }
      ${SEO_FRAGMENT}
    }
    ${MENU_FRAGMENT}
  }`

export const GET_MENUS_FOR_404 = `
  query getMenusFor404{
    ${MENU_FRAGMENT}
  }`

export const HUMAN_SITEMAP_QUERY = `
  query getHumanSitemapPage($pageId: ID!) {
    page(id: $pageId, idType: URI) {
      title
      ${SEO_FRAGMENT}
    }
    posts(first: 1000) {
      nodes {
        slug
        title
        seo {
          metaRobotsNoindex
        }
        categories {
          nodes {
            slug
          }
        }
      }
    }
    categories(first: 100) {
      nodes {
        name
        slug
        seo {
          metaRobotsNoindex
        }
      }
    }
    pages(first: 1000) {
      nodes {
        seo {
          metaRobotsNoindex
        }
        slug
        title
      }
    }
    ${MENU_FRAGMENT}
  }`

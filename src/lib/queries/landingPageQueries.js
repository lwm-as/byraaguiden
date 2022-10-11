import MENU_FRAGMENT from '../fragments/menus'
import SEO_FRAGMENT from '../fragments/seo'

export const LANDING_PAGE_QUERIES = `

query getLandingPage($pageId: ID!){
 landingPage(id: $pageId, idType: SLUG) {
   content
   ${SEO_FRAGMENT}
    landingPageHero {
      landingpageHeroTitle
      landingpageHeroSubtitle
      landingpageHeroImage{
        sourceUrl
        mediaDetails{
          height
          width
        }
      }
    }
    landingPageProviders {
      landingpageProviders {
        landingpageProvider {
          ... on App {
            title
            appInfo {
              pros {
                pro
              }
              cons {
                con
              }
              providerCtaSectionText
              providerText
              rankingText
              languagesAvailable
              oralLearning
              writtenLearning
              learningMethod
              freeTrial
              socialLearning
              appRating
              appVisitUrl
              appFeatures {
                appFeature
              }
              appLogo {
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
              appReviewPost {
                ... on Post {
                  slug
                }
              }
            }
          }
        }
      }
    }
    recommendedApps {
     hasCustomRecommendedApps
      recommendedApps {
        recommendedApp {
          ... on App {
            appInfo {
              appName
              appFeatures {
                appFeature
              }
              appVisitUrl
              appRating
              appLogo {
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
  ${MENU_FRAGMENT}
   apps(first: 100) {
    nodes {
      appInfo {
        appName
        appFeatures {
          appFeature
        }
        appVisitUrl
        appRating
        appLogo {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
}
`

export const LANDING_PAGE_SLUGS = `
  {
    landingPages(where: {status: PUBLISH}, first: 200) {
      nodes {
        slug
      }
    }
  }
`

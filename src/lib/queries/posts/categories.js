import MENU_FRAGMENT from '../../fragments/menus'
import SEO_FRAGMENT from '../../fragments/seo'

export const GET_CATEGORY_SLUGS = `
  query getCategorySlugs{
    categories(where: { hideEmpty: true, exclude: 271 }, first: 50) {
      nodes {
        slug
      }
    }
  }`

export const GET_POSTS_BY_CATEGORY = `
  query getPostsByCategory($id: ID!, $after: String, $first: Int, $featured: ID!, $popular: ID!){
    category(id: $id, idType: SLUG) {
      ${SEO_FRAGMENT}
      name
      posts(first: $first, after: $after, where: {categoryNotIn: 271}) {
        nodes {
        author {
        node {
          firstName
          avatar {
           url
          }
        }
      }
          title
          slug
          excerpt
          modifiedGmt
          featuredImage {
            node {
              sourceUrl
              mediaDetails {
             width
            height
         }
            }
          }
          categories {
            nodes {
              slug
              name
              servicePreviewDescription {
             serviceDescription
           }
            }
          }
          tags {
            nodes {
              name
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
    featuredPosts: tag(id: $featured, idType: NAME) {
      posts(first: 1) {
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
              name
            }
          }
          tags {
            nodes {
              name
            }
          }
        }
      }
    }
 
    popularPosts: tag(id: $popular, idType: NAME) {
      posts(first: 4) {
        nodes {
          title
          slug
          excerpt
          featuredImage {
            node {
              sourceUrl
            mediaDetails {
             width
            height
         }
            }
          }
          categories {
            nodes {
              slug
              name
            }
          }
          tags {
            nodes {
              name
            }
          }
        }
      }
    }
    ${MENU_FRAGMENT}
  }`

export const GET_MORE_POSTS_BY_CATEGORY = `
  query getMorePostsByCategory($first: Int!, $after: String!, $catName: String!) {
    posts(first: $first, where: {categoryName: $catName, categoryNotIn: 271}, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
         author {
          node {
            firstName
          }
        }
        title
        slug
        excerpt
        featuredImage {
          node {
             mediaDetails {
             width
            height
         }
            sourceUrl
          }
        }
        categories {
          nodes {
            slug
            name
          }
        }
      }
    }
  }`

export const GET_ALL_CATEGORIES = `
  query getAllCategories {
    categories(first: 100, where: {hideEmpty: true, exclude: 271}) {
      nodes {
        name
        slug
        servicePreviewDescription {
           serviceDescription
        }
        
      }
    }
  }`

import MENU_FRAGMENT from '../../fragments/menus'
import SEO_FRAGMENT from '../../fragments/seo'
import IMAGE_FRAGMENT from '../../fragments/image'

export const GET_ALL_ARTICLES = `
  query getArticlesPage($id: ID!,$catId: ID!  $first: Int, $after: String){
    page(id: $id, idType: URI) {
      title
      ${SEO_FRAGMENT}
    }
    categories(first: 100, where: {hideEmpty: true}) {
      nodes {
        id
        slug
        name
      }
    }
    category(idType: SLUG, id: $catId) {
      posts(first: $first, after: $after) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          slug
          title
          featuredImage {
            node {
              ${IMAGE_FRAGMENT}
            }
          }
          excerpt
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

export const GET_MORE_ARTICLES = `
  query getMoreArticles($first: Int, $after: String, $catId: ID!){
    category(idType: SLUG, id: $catId) {
      posts(first: $first, after: $after) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          slug
          title
          featuredImage {
            node {
              ${IMAGE_FRAGMENT}
            }
          }
          excerpt
          categories {
            nodes {
              slug
            }
          }
        }
      }
    }
  }`

export const GET_CATEGORY_SLUGS = `
  query getCategorySlugs{
    categories(where: { hideEmpty: true }, first: 50) {
      nodes {
          slug
      }
    }
  }`

export const GET_ARTICLES_BY_CATEGORY = `
  query getPostsByCatgory($categoryName: ID!, $first: Int, $after: String){
    category(id: $categoryName, idType: SLUG) {
      seo {
        title
        metaDesc
        metaRobotsNoindex
        metaRobotsNofollow
      }
      posts(first: $first, after: $after, where: {categoryName: "blog"}) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          slug
          id
          title
          excerpt
          categories {
            nodes {
              slug
            }
          }
        }
      }
    }
    categories(first: 50, where: {hideEmpty: true}) {
      nodes {
        slug
        name
        id
      }
    }
    ${MENU_FRAGMENT}
  }`

export const GET_MORE_ARTICLES_BY_CATEGORY = `
  query getMoreArticles($categoryName: ID!, $first: Int, $after: String){
    category(idType: SLUG, id: $categoryName) {
      posts(first: $first, after: $after) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          slug
          title
          excerpt
          categories {
            nodes {
              slug
            }
          }
        }
      }
    }
  }`

export default `
headerMenu: menu(id: "Header Menu", idType: NAME) {
  menuItems(first: 100) {
    nodes {
      label
      path
      id
      parentId
      connectedNode {
        node {
          ... on Category {
            name
            slug
            taxonomyIcon {
              iconname
            }
          }
        }
      }
    }
  }
}
footerMenu: menu(id: "Footer Menu", idType: NAME) {
  menuItems(first: 100) {
    nodes {
      label
      path
      id
      parentId
    }
  }
}
`

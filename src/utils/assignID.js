/**
 * Assign uniq id to the HTML elements.
 * @param {NodeList} elements
 * @param {Array} idData
 */
const assignIDs = (elements, idData) => {
  const el = elements
  idData.forEach((elem, i) => {
    el[i].id = elem.id
  })
}

export default assignIDs

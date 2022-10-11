export const getIdFromString = str => str.toLowerCase().trim().replaceAll(/\s/gi, '_')

/**
 * Get the text of the title and generate uniq ID.
 * @param {NodeList} titles
 */
export const getTextAndId = (titles, customToc) => {
  const result = []

  // Keep track all generated id's to check for the duplicates
  // in case if the string has been already used on the page title.
  const idArr = []
  let id = 0
  Array.from(titles).forEach(element => {
    const { innerText } = element

    const isExisted = idArr.includes(id)

    idArr.push(id)

    // Check if the  has been already created.
    // Add the order number of the id to make it uniq.
    if (isExisted) {
      const idMatches = idArr.filter(elem => elem === id)
      id = `${id}_${idMatches.length}`
    }

    if (customToc && customToc[id]?.contentTitle) {
      result.push({ id, text: customToc[id]?.contentTitle })
    }
    if (!customToc) {
      result.push({ id, text: innerText })
    }
    id += 1
  })

  return result
}

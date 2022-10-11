import { CATEGORIES_NAMES } from '../../lib/constants/categories'

/**
 * 1) Check is article category is company category type
 * @param {Array} categories
 * @param {String} articleCategoryType
 */
const isAgencyArticleType = (categories = [], articleCategoryType) => {
  const foundCategory = categories.find(item => item.name.toLowerCase() === articleCategoryType.toLowerCase())

  return (foundCategory?.name || '').toLowerCase() === CATEGORIES_NAMES.agency.toLowerCase()
}

export default isAgencyArticleType

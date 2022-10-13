import orderBy from 'lodash/orderBy'

import { SORT_OPTIONS } from '../lib/constants/sortOptions'

export function sortReviews(sortValue, list = []) {
  const [, highestScore, lowestScore, mostReviews, leastReviews, bestReviews, worstReviews] = SORT_OPTIONS

  if (sortValue === highestScore.key) {
    return orderBy(list, ['agencyScore'], ['desc'])
  }

  if (sortValue === lowestScore.key) {
    return orderBy(list, ['agencyScore'], ['asc'])
  }

  if (sortValue === mostReviews.key) {
    return orderBy(list, ['totalReviews'], ['desc'])
  }

  if (sortValue === leastReviews.key) {
    return orderBy(list, ['totalReviews'], ['asc'])
  }

  if (sortValue === bestReviews.key) {
    return orderBy(list, ['rating'], ['desc'])
  }

  if (sortValue === worstReviews.key) {
    return orderBy(list, ['rating'], ['asc'])
  }

  return list
}

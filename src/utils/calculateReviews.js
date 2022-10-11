/* eslint-disable prefer-const */
/* eslint-disable prefer-object-spread */
const minMax = (reviews, method) => Math[method](...reviews.map(item => item.providerGoogleUserRatingsTotal), null)

const calculateReviews = reviews => {
  const calculatedReviews = reviews.map(item => {
    const round = (value, precision) => {
      // eslint-disable-next-line no-restricted-properties
      let multiplier = Math.pow(10, precision || 0)
      return Math.round(value * multiplier) / multiplier
    }

    // const popularity = round(
    //   (((item.providerGoogleUserRatingsTotal - minMax(reviews, 'min')) /
    //     (minMax(reviews, 'max') - minMax(reviews, 'min'))) *
    //     100) /
    //     20,
    //   1
    // )

    const popularity = round((item.providerGoogleUserRatingsTotal * 100) / 20)

    const totalScore = round((item.providerGoogleRating + popularity) / 2 || 0, 1)
    return Object.assign({}, { ...item, popularity, totalScore })
  })
  return calculatedReviews
}

export default calculateReviews

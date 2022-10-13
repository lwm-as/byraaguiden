const minMax = (reviews, method) => Math[method](...reviews.map(item => item.totalReviews), null)

const calculateReviews = (reviews = []) => {
  const calculatedReviews = reviews.map(item => {
    const round = (value, precision) => {
      let multiplier = Math.pow(10, precision || 0)
      return Math.round(value * multiplier) / multiplier
    }
    const popularity = round(
      (((item.totalReviews - minMax(reviews, 'min')) / (minMax(reviews, 'max') - minMax(reviews, 'min'))) * 100) / 20,
      1
    )

    const agencyScore = round((item.rating + popularity) / 2 || 0, 1)

    return Object.assign({}, { ...item, popularity, agencyScore })
  })

  return calculatedReviews
}

export default calculateReviews

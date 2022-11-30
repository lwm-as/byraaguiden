import { Client } from '@googlemaps/google-maps-services-js'

export default async function handler(req, res) {
  const placeIds = req.query.placeid.split(',')
  console.log(placeIds)
  console.log(placeIds.length)
  if (placeIds.every(placeId => placeId === '')) {
    return res.status(200).json({ msg: 'empty' })
  }

  const client = new Client({})

  const response = {
    rating: 0,
    totalReviews: 0,
    reviews: []
  }

  const allReviews = placeIds.map(async placeId => {
    try {
      if (placeId === '') {
        return response
      }

      const fields = ['reviews', 'rating', 'user_ratings_total']

      const { data } = await client.placeDetails({
        params: {
          key: process.env.GOOGLE_MAPS_API_KEY,
          place_id: placeId,
          language: 'no',
          fields
        }
      })

      return {
        rating: data.result.rating || response.rating,
        totalReviews: data.result.user_ratings_total || response.totalReviews,
        reviews: data.result.reviews || response.reviews
      }
    } catch (error) {
      return response
    }
  })

  const reviews = await Promise.all(allReviews)

  return res.status(200).json({ reviews })
}

import useSWR from 'swr'
import fetcher from '../utils/fetcher'
import { useEffect, useState } from 'react'
import calculateReviews from '../utils/calculateReviews'
import { sortReviews } from '../utils/sortReviews'

export function useReviewProviderSearch(providers) {
  const [sortedReviewsForSearch, setSortedReviewsForSearch] = useState([])
  const [currentPlaceId, setCurrentPlaceIdSearch] = useState('')
  const [currentReview, setCurrentReview] = useState()

  const placeIds = providers?.map(item => item?.provider.providersInfo.placeid)

  const { data, isValidating } = useSWR(`/api/review?placeid=${placeIds?.join(',')}`, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  })

  const changeCurrentReview = () => {
    const [currentReview] = sortedReviewsForSearch.filter(
      item => item.provider.providersInfo.placeid === currentPlaceId
    )
    setCurrentReview(currentReview)
  }

  useEffect(() => {
    changeCurrentReview()
  }, [currentPlaceId])

  useEffect(() => {
    if (!isValidating && data) {
      const reviews = data.reviews.map((review, idx) => Object.assign({}, review, providers[idx]))

      const calculatedReviews = calculateReviews(reviews)

      setSortedReviewsForSearch(sortReviews('highestScore', calculatedReviews))
    }
  }, [isValidating])

  return {
    sortedReviewsForSearch,
    setCurrentPlaceIdSearch,
    currentReview
  }
}

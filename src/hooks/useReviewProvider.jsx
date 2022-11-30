import { SORT_OPTIONS } from '../lib/constants/sortOptions'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import calculateReviews from '../utils/calculateReviews'
import fetcher from '../utils/fetcher'
import { sortReviews } from '../utils/sortReviews'
import disableScroll from '../utils/disableScroll'
import uniqid from 'uniqid'

const useReviewProvider = (providers, cities) => {
  //Providers
  let initialProviders = providers.filter((item, ixd) => ixd < 10)
  let initialRest = providers.filter((item, ixd) => ixd >= 10)

  //Reviews
  const [reviews, setReviews] = useState([])
  const [sortedReviews, setSortedReviews] = useState([])

  const [loaded, setLoaded] = useState(initialProviders)
  const [rest, setRest] = useState(initialRest)
  const [loadMore, setLoadMore] = useState(false)

  const [currentPlaceId, setCurrentPlaceId] = useState('')
  const [currentReviews, setCurrentReviews] = useState()

  const router = useRouter()

  const changeCurrentReview = () => {
    const [currentReview] = sortedReviews.filter(item => item.provider.providersInfo.placeid === currentPlaceId)
    setCurrentReviews(currentReview)
  }

  useEffect(() => {
    changeCurrentReview()
  }, [currentPlaceId])

  useEffect(() => {
    setLoaded(initialProviders)
    setRest(initialRest)
  }, [router.asPath])

  const placeIds = loaded.map(item => item.provider.providersInfo.placeid)

  const { data, isValidating } = useSWR(`/api/review?placeid=${placeIds.join(',')}`, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  })

  // some logic to just get top 50 providers and save them in a list

  if (loadMore) {
    const nextProviders = rest.filter((item, ixd) => ixd < 10)
    const nextRest = rest.filter((item, ixd) => ixd >= 10)
    setLoaded(state => [...state, ...nextProviders])
    setRest(nextRest)
    setLoadMore(false)
  }

  useEffect(() => {
    if (!isValidating && data) {
      const reviews = data.reviews.map((review, idx) => Object.assign({}, review, providers[idx]))

      const calculatedReviews = calculateReviews(reviews)

      // setReviews(sortReviews('highestScore', calculatedReviews))
      // setSortedReviews(sortReviews('highestScore', calculatedReviews))
      setReviews(calculatedReviews)
      setSortedReviews(calculatedReviews)
    }
  }, [isValidating])
  const changeReviewSort = event => {
    const { value } = event?.target?.dataset || {}

    if (value === 'default') {
      setSortedReviews(reviews)
    } else {
      setSortedReviews(sortReviews(value, sortedReviews))
    }
  }

  return {
    reviews,
    sortedReviews,
    sortReviews: changeReviewSort,
    loading: isValidating,
    loadMore,
    setLoadMore,
    rest,
    setCurrentPlaceId,
    currentReviews,
    cities
  }
}

export default useReviewProvider

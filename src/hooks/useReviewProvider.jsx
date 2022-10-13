import { SORT_OPTIONS } from '../lib/constants/sortOptions'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import calculateReviews from '../utils/calculateReviews'
import fetcher from '../utils/fetcher'
import { sortReviews } from '../utils/sortReviews'
import disableScroll from '../utils/disableScroll'

const useReviewProvider = (providers, cities) => {
  let initialProviders = providers.filter((item, ixd) => ixd < 10)
  let initialRest = providers.filter((item, ixd) => ixd >= 10)
  const [reviews, setReviews] = useState([])
  const [sortedReviews, setSortedReviews] = useState([])
  const [sortFilters, setSortFilters] = useState([])
  const [sortValue, setSortValue] = useState(SORT_OPTIONS)

  const [loaded, setLoaded] = useState(initialProviders)
  const [rest, setRest] = useState(initialRest)
  const [loadMore, setLoadMore] = useState(false)
  const [modalStatus, setModalStatus] = useState(false)
  const [currentPlaceId, setCurrentPlaceId] = useState('')
  const [currentReviews, setCurrentReviews] = useState()

  const router = useRouter()
  //
  const showModal = () => {
    setModalStatus(true)
  }
  //
  const closeModal = () => {
    setModalStatus(false)
  }

  const changeCurrentReview = () => {
    const [currentReview] = sortedReviews.filter(item => item.provider.providersInfo.placeid === currentPlaceId)

    setCurrentReviews(currentReview)
  }

  useEffect(() => {
    changeCurrentReview()
  }, [currentPlaceId])

  //
  useEffect(() => {
    if (modalStatus) {
      disableScroll.on()
    } else {
      disableScroll.off()
    }
  }, [modalStatus])

  useEffect(() => {
    setLoaded(initialProviders)
    setRest(initialRest)
    sortValue.map(object => {
      if (object.key === 'default') {
        object.selected = true
      } else {
        object.selected = false
      }
    })
  }, [router.asPath])

  const placeIds = loaded.map(item => item.provider.providersInfo.placeid)

  const { data, isValidating } = useSWR(`/api/review?placeid=${placeIds.join(',')}`, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  })

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

      const cities = new Set(calculatedReviews.map(review => review.provider.providersInfo.city.name))
      const focusAreas = new Set(
        calculatedReviews
          .map(review => review.provider.providersInfo.focusareas.map(focusArea => focusArea.name))
          .flat()
      )

      const filter = obj => ({
        name: obj.toLowerCase().replace(/ /g, '-') + 1,
        label: obj,
        value: obj,
        checked: false,
        disabled: false
      })

      setSortFilters(() => ({
        city: [...cities].map(city => filter(city)),
        focusareas: [...focusAreas].map(area => filter(area))
      }))

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

    setSortValue(state => {
      return state.map(option => {
        if (option.key === value) {
          return { ...option, selected: true }
        }
        return { ...option, selected: false }
      })
    })
  }

  const changeReviewFilter = (value, type) => {
    setSortFilters(state => {
      const newState = state[type].map(item => {
        if (item.label === value) {
          return {
            ...item,
            checked: !item.checked
          }
        }
        return item
      })
      return { ...state, [type]: [...newState] }
    })
  }

  useEffect(() => {
    const filters = []
    const filteredReviews = []

    for (const key in sortFilters) {
      sortFilters[key].forEach(filter => {
        if (filter.checked) filters.push({ ...filter, type: key })
      })
    }

    if (filters.length === 0) {
      setSortedReviews(reviews)
    } else {
      filters.forEach(filter => {
        reviews.forEach(review => {
          const root = review.provider.providersInfo[filter.type]
          const isArray = 'forEach' in root

          if (!isArray && filter.label === root.name) {
            filteredReviews.push(review)
          }

          if (isArray) {
            root.forEach(focusArea => {
              if (filter.label === focusArea.name) filteredReviews.push(review)
            })
          }
        })
      })

      const uniqueReviews = [...new Set(filteredReviews)]

      changeReviewSort({ target: { dataset: { value: 'default' } } })
      setSortedReviews(uniqueReviews)
    }
  }, [sortFilters])

  return {
    reviews,
    sortedReviews,
    sortFilters,
    sortReviews: changeReviewSort,
    sortValue,
    loading: isValidating,
    filterReviews: changeReviewFilter,
    loadMore,
    setLoadMore,
    rest,
    modalStatus,
    showModal,
    closeModal,
    setCurrentPlaceId,
    currentReviews,
    cities
  }
}

export default useReviewProvider

import useReviewProvider from '../../hooks/useReviewProvider'
import { createContext, useContext } from 'react'
import { useReviewProviderSearch } from '../../hooks/useReviewProviderSearch'

const ReviewContext = createContext()

export const ReviewContextProvider = ({ children, providers = [], cities = [] }) => {
  const reviews = useReviewProvider(providers, cities)

  // const reviewsForSearchField = useReviewProviderSearch(providers)

  return (
    <ReviewContext.Provider
      value={{
        reviews
        // reviewsForSearchField
      }}
    >
      {children}
    </ReviewContext.Provider>
  )
}

export const useReviewContext = () => useContext(ReviewContext)

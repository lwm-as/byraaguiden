import useReviewProvider from '../../hooks/useReviewProvider'
import { createContext, useContext } from 'react'

const ReviewContext = createContext()

export const ReviewContextProvider = ({ children, providers = [], cities = [] }) => {
  const reviews = useReviewProvider(providers, cities)

  return <ReviewContext.Provider value={reviews}>{children}</ReviewContext.Provider>
}

export const useReviewContext = () => useContext(ReviewContext)

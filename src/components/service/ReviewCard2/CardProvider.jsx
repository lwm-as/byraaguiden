import React, { createContext, useContext } from 'react'

// preparing the "data layer or globalContext"
export const CardContext = createContext()

export const CardProvider = ({ children, cardData }) => (
  <CardContext.Provider value={cardData}>{children}</CardContext.Provider>
)

// Anytime you want a value from the data layer context
export const useCardContext = () => {
  const context = useContext(CardContext)

  if (!context) {
    throw new Error('Child components of Card cannot be rendered outside the Card component!')
  }

  return context
}

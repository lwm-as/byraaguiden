import React, { createContext, useState } from 'react'

export const ArticleContext = createContext()

export default function ArticleProvider({ children }) {
  const [distinctArticles, setDistinctArticles] = useState()

  return <ArticleContext.Provider value={{ setDistinctArticles, distinctArticles }}>{children}</ArticleContext.Provider>
}

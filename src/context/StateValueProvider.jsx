import React, { createContext, useContext, useReducer } from 'react'

//preparing the "data layer or globalContext"
export const StateContext = createContext()

//Passing in initialState, reducer and children
//initialState and reducer comes from index.js
//children is basically whatever component the data layer wraps --> children has access to the data layer essentially
// {children} = <App /> from index.js
export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
)

//Anytime you want a value from the data layer context or dispatch an action to it
export const useStateValue = () => useContext(StateContext)

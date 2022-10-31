import { useReducer } from 'react'

export const actionTypes = {
  toggle_checked: 'toggle_checked'
}

export const initialState = {
  checked: [],
  basket: []
}

export const toggleReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.toggle_checked: {
      let prev = state.checked

      let itemIndex = prev.indexOf(action.idx)

      if (itemIndex !== -1) {
        prev.splice(itemIndex, 1)
      } else {
        prev.push(action.idx)
      }

      return {
        ...state,
        prev
      }
    }
  }
}

export const useCompareItems = ({ reducer = toggleReducer } = {}) => {
  const [{ checked }, dispatch] = useReducer(reducer, initialState)

  const toggleChecked = idx => dispatch({ type: actionTypes.toggle_checked, idx })

  return {
    checked,
    toggleChecked
  }
}

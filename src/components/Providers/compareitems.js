import { useReducer } from 'react'

export const actionTypes = {
  toggle_checked: 'toggle_checked',
  remove_item: 'remove_item'
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
    case actionTypes.remove_item: {
      let prev = state.checked
      let itemIndex = prev.indexOf(action.idx)

      if (!state.checked.includes(action.idx)) {
        prev.splice(itemIndex, 1)
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
  const removeItemFromCompareModal = idx => dispatch({ type: actionTypes.remove_item, idx })

  return {
    checked,
    removeItemFromCompareModal,
    toggleChecked
  }
}

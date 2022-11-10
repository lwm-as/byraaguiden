import { useReducer } from 'react'

// a hook that keeps track of incoming index and toggles it
// sorts column

export const actionTypes = {
  toggle_index: 'toggle_index',
  toggle_button: 'check_button',
  resetState: 'resetState'
}

const inititalState = {
  openIndexes: [-1],
  checkedButtons: [-1],
  resetState: []
}

export const toggleReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.toggle_index: {
      const closing = state.openIndexes.includes(action.index)
      const opening = !state.openIndexes.includes(action.index)
      return {
        ...state,
        openIndexes: opening
          ? [action.index]
          : closing
          ? state.openIndexes?.filter(i => i !== action.index)
          : [...state.openIndexes, action.index]
      }
    }
    case actionTypes.toggle_button: {
      const closing = state.checkedButtons.includes(action.index)
      const opening = !state.checkedButtons.includes(action.index)
      return {
        ...state,
        checkedButtons: opening
          ? [action.index]
          : closing
          ? state.checkedButtons?.filter(i => i !== action.index)
          : [...state.checkedButtons, action.index]
      }
    }

    case actionTypes.resetState:
      return {
        ...state,
        ...inititalState,
        openIndexes: []
      }
    default: {
      throw new Error(`Unhandled type in toggleReducer: ${action.type}`)
    }
  }
}

// user can provide custom reducer if he wishes to
export const useToggler = ({ reducer = toggleReducer } = {}) => {
  const [{ openIndexes, checkedButtons, radioGroupCategory }, dispatch] = useReducer(reducer, inititalState)

  const toggleIndex = index => dispatch({ type: actionTypes.toggle_index, index })
  const toggleButton = index => dispatch({ type: actionTypes.toggle_button, index })

  const resetState = () => dispatch({ type: actionTypes.resetState })

  return { resetState, openIndexes, toggleIndex, toggleButton, checkedButtons }
}

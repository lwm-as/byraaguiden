import { useReducer } from 'react'
import { OPTIONS } from '../../components/offerformSteps/fieldValues'

export const actionTypes = {
  toggle_category: 'toggle_category',
  toggle_budget: 'toggle_budget',
  toggle_time: 'toggle_time',
  toggle_probability: 'toggle_probability'
}

const inititalState = {
  categoryGroup: {
    newWebsite: false,
    updateWebsite: false,
    createWebStore: false,
    updateWebStore: false,
    other: false
  },
  budgetGroup: {
    tenThousand: false,
    between10And20: false,
    between20And50: false,
    between50And100000: false,
    moreThan100000: false,
    other: false
  },
  timeGroup: {
    asap: false,
    oneWeek: false,
    twoWeeks: false,
    oneMonth: false,
    twoOrThreeMonths: false,
    other: false
  },
  probabilityGroup: {
    veldigSannsynlig: false,
    ganskeSannsynlig: false,
    liteSannsynlig: false,
    usikker: false
  }
}

export const toggleReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.toggle_category: {
      const radioGroupState1 = { ...state.categoryGroup }
      for (const key in radioGroupState1) {
        radioGroupState1[key] = !action.event.target.checked
      }
      return {
        ...state,
        categoryGroup: {
          ...radioGroupState1,
          [action.event.target.name]: action.event.target.checked
        }
      }
    }
    case actionTypes.toggle_budget: {
      const radioGroupState2 = { ...state.budgetGroup }
      for (const key in radioGroupState2) {
        radioGroupState2[key] = !action.event.target.checked
      }
      return {
        ...state,
        budgetGroup: {
          ...radioGroupState2,
          [action.event.target.name]: action.event.target.checked
        }
      }
    }
    case actionTypes.toggle_time: {
      const radioGroupState3 = { ...state.timeGroup }
      for (const key in radioGroupState3) {
        radioGroupState3[key] = !action.event.target.checked
      }
      return {
        ...state,
        timeGroup: {
          ...radioGroupState3,
          [action.event.target.name]: action.event.target.checked
        }
      }
    }
    case actionTypes.toggle_probability: {
      const radioGroupState4 = { ...state.probabilityGroup }
      for (const key in radioGroupState4) {
        radioGroupState4[key] = !action.event.target.checked
      }
      return {
        ...state,
        probabilityGroup: {
          ...radioGroupState4,
          [action.event.target.name]: action.event.target.checked
        }
      }
    }
    default: {
      throw new Error(`Unhandled type in toggleReducer: ${action.type}`)
    }
  }
}

export const useSelector = ({ reducer = toggleReducer } = {}) => {
  const [{ budgetGroup, categoryGroup, timeGroup, probabilityGroup }, dispatch] = useReducer(reducer, inititalState)

  const toggleCategory = event => dispatch({ type: actionTypes.toggle_category, event })
  const toggleBudget = event => dispatch({ type: actionTypes.toggle_budget, event })
  const toggleTime = event => dispatch({ type: actionTypes.toggle_time, event })
  const toggleProbability = event => dispatch({ type: actionTypes.toggle_probability, event })

  return {
    OPTIONS,
    budgetGroup,
    categoryGroup,
    timeGroup,
    probabilityGroup,
    toggleCategory,
    toggleBudget,
    toggleTime,
    toggleProbability
  }
}

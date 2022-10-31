import { useReducer } from 'react'
import { OPTIONS } from '../../components/offerformSteps/fieldValues'

export const actionTypes = {
  toggle_webDesignCategory: 'toggle_webDesignCategory',
  toggle_appDevelopmentCategory: 'toggle_appDevelopmentCategory',
  toggle_digitalMarketingCategory: 'toggle_digitalMarketingCategory',
  toggle_budget: 'toggle_budget',
  toggle_time: 'toggle_time',
  toggle_probability: 'toggle_probability'
}

const inititalState = {
  webDesignCategoryGroup: {
    newWebsite: false,
    updateWebsite: false,
    createWebStore: false,
    updateWebStore: false,
    other: false
  },
  appDevelopmentCategoryGroup: {
    newApp: false,
    updateApp: false,
    other: false
  },
  digitalMarketingCategoryGroup: {
    socialMedia: false,
    ads: false,
    seo: false,
    digitalStrategy: false,
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
    case actionTypes.toggle_webDesignCategory: {
      const radioGroupState1 = { ...state.webDesignCategoryGroup }
      for (const key in radioGroupState1) {
        radioGroupState1[key] = !action.event.target.checked
      }
      return {
        ...state,
        webDesignCategoryGroup: {
          ...radioGroupState1,
          [action.event.target.name]: action.event.target.checked
        }
      }
    }
    case actionTypes.toggle_appDevelopmentCategory: {
      const radioGroupState5 = { ...state.appDevelopmentCategoryGroup }
      for (const key in radioGroupState5) {
        radioGroupState5[key] = !action.event.target.checked
      }
      return {
        ...state,
        appDevelopmentCategoryGroup: {
          ...radioGroupState5,
          [action.event.target.name]: action.event.target.checked
        }
      }
    }
    case actionTypes.toggle_digitalMarketingCategory: {
      const radioGroupState6 = { ...state.digitalMarketingCategoryGroup }
      for (const key in radioGroupState6) {
        radioGroupState6[key] = !action.event.target.checked
      }
      return {
        ...state,
        digitalMarketingCategoryGroup: {
          ...radioGroupState6,
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
  const [
    {
      budgetGroup,
      appDevelopmentCategoryGroup,
      digitalMarketingCategoryGroup,
      webDesignCategoryGroup,
      timeGroup,
      probabilityGroup
    },
    dispatch
  ] = useReducer(reducer, inititalState)

  const toggleWebDesignCategory = event => dispatch({ type: actionTypes.toggle_webDesignCategory, event })
  const toggleAppDevelopmentCategory = event => dispatch({ type: actionTypes.toggle_appDevelopmentCategory, event })
  const toggleDigitalMarketingCategory = event => dispatch({ type: actionTypes.toggle_digitalMarketingCategory, event })
  const toggleBudget = event => dispatch({ type: actionTypes.toggle_budget, event })
  const toggleTime = event => dispatch({ type: actionTypes.toggle_time, event })
  const toggleProbability = event => dispatch({ type: actionTypes.toggle_probability, event })

  return {
    OPTIONS,
    budgetGroup,
    webDesignCategoryGroup,
    appDevelopmentCategoryGroup,
    digitalMarketingCategoryGroup,
    timeGroup,
    probabilityGroup,
    toggleWebDesignCategory,
    toggleDigitalMarketingCategory,
    toggleAppDevelopmentCategory,
    toggleBudget,
    toggleTime,
    toggleProbability
  }
}

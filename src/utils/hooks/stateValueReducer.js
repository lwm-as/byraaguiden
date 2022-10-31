export const initialState = {
  basket: [],
  checkedItems: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      let tmp = []
      const find = state.basket.find(item => item?.provider.id === action?.item?.provider?.id)

      if (find) {
        tmp = [...state.basket]
      } else {
        tmp = [...state.basket, action.item]
      }

      return {
        ...state,
        basket: tmp
      }

    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }

    case 'REMOVE_FROM_BASKET':
      //find the first ELEMENT that matches the id (condition)
      const index = state.basket.findIndex(basketItem => basketItem.provider.id === action.id)
      //creating a copy of the state
      let newBasket = [...state.basket]

      //if index is greater than 0 than it found a match
      //pass the index and splice it by one
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`)
      }
      return {
        ...state,
        basket: newBasket
      }

    case 'TOGGLE_CHECKED': {
      let prev = state.checkedItems
      let prevBasket = state.basket

      let itemIndex = prev?.indexOf(action.id)

      if (itemIndex !== -1) {
        prev?.splice(itemIndex, 1)
        prevBasket?.splice(itemIndex, 1)
      } else {
        prev.push(action.id)
        prevBasket?.push(action.item)
      }

      return {
        ...state,
        prev,
        basket: prevBasket
      }
    }

    default:
      return state
  }
}

export default reducer

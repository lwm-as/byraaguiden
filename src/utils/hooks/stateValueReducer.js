export const initialState = {
  basket: [],
  checkedItems: []
}

const reducer = (state, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'ADD_TO_BASKET':
      let prevBasket = state.basket
      let idsArray = state.checkedItems

      let findIndex = idsArray.indexOf(action.id)

      if (!idsArray.includes(action.id)) {
        idsArray.push(action.id)
      } else {
        idsArray.splice(findIndex, 1)
      }

      if (idsArray.includes(action.id)) {
        prevBasket.push(action?.item)
      } else {
        prevBasket.splice(findIndex, 1)
      }

      return {
        ...state,
        basket: prevBasket
      }

    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }

    case 'REMOVE_FROM_BASKET':
      //find the first ELEMENT that matches the id (condition)
      const indexOne = state.basket.findIndex(basketItem => basketItem.provider.id === action.id)
      let ids = state.checkedItems

      let idsIndex = ids?.indexOf(action.id)
      //creating a copy of the state
      let newBasket = [...state.basket]

      //if index is greater than 0 than it found a match
      //pass the index and splice it by one
      if (indexOne >= 0) {
        newBasket.splice(indexOne, 1)
        ids?.splice(idsIndex, 1)
      } else {
        console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`)
      }
      return {
        ...state,
        basket: newBasket
      }

    case 'TOGGLE_CHECKED': {
      // let prev = state.checkedItems
      let prevBasket = state.basket
      let idsArray = state.checkedItems

      let index = idsArray?.indexOf(action.id)

      if (!idsArray.includes(action.id)) {
        idsArray.push(action.id)
      } else {
        idsArray.splice(index, 1)
      }

      if (idsArray.includes(action.id)) {
        prevBasket.push(action?.item)
      } else {
        prevBasket.splice(index, 1)
      }

      return {
        ...state,
        basket: prevBasket
      }
    }

    default:
      return state
  }
}

export default reducer

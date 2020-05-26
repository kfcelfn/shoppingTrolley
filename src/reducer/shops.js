import { FETCH_SHOPS_DATA } from '@/constants/actionTypes'

const defaultState = {
  shopData: []
}

export default function shopsReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_SHOPS_DATA:
      return { ...state, shopData: action.payload.data }
    default:
      return state
  }
}
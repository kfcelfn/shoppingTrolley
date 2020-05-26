import { ORDER_ALL } from '@/constants/actionTypes';
 
const defaultState = {
  orderAll: [],
}
 
export default function home (state = defaultState, action) {
  switch (action.type) {
    case ORDER_ALL:
      return {
        ...state,
        orderAll: action.payload.data
      }
 
    default:
      return state
  }
}
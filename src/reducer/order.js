import { ORDER_ALL, ORDER_STAYEVALUATE } from '@/constants/actionTypes';
 
const defaultState = {
  orderAll: [],
  orderStayEvaluate: []
}
 
export default function home (state = defaultState, action) {
  switch (action.type) {
    case ORDER_ALL:
      return {
        ...state,
        orderAll: action.payload.data
      }
    case ORDER_STAYEVALUATE:
      return {
        ...state,
        orderStayEvaluate: action.payload.data
      }
 
    default:
      return state
  }
}
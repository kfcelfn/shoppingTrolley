import { MY_ENSHRINE } from '@/constants/actionTypes';
 
const defaultState = {
  enshrineData: [],
}
 
export default function home (state = defaultState, action) {
  switch (action.type) {
    // 我的收藏
    case MY_ENSHRINE:
      return {
        ...state,
        enshrineData: action.payload.data
      }
 
    default:
      return state
  }
}
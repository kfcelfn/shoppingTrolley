import { FETCH_GOODS_MENU, FETCH_GOODS_DATA } from '@/constants/actionTypes'

const defaultState = {
  menuData: [],
  shopData: []
}

export default function goodsReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_GOODS_MENU:
      return { ...state, menuData: action.payload.data  }
    case FETCH_GOODS_DATA:
      return { ...state, shopData: action.payload.data }
    default:
      return state
  }
}
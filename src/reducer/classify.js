import { FETCH_CLASSIFY_DATA } from '@/constants/actionTypes'

const defaultState = {
  listData: []
}

export default function classifyReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_CLASSIFY_DATA:
      return { ...state, listData: action.payload.data  }
    default:
      return state
  }
}
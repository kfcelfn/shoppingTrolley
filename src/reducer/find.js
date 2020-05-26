import { FETCH_FIND_HOTDATA } from '@/constants/actionTypes'

const defaultState = {
  hotData: []
}

export default function findReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_FIND_HOTDATA:
      return { ...state, hotData: action.payload.data  }
    default:
      return state
  }
}
import { FETCH_FIND_HOTDATA, FETCH_FIND_LATELY } from '@/constants/actionTypes'

const defaultState = {
  hotData: [],
  latelyData: []
}

export default function findReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_FIND_HOTDATA:
      return { ...state, hotData: action.payload.data  }
    case FETCH_FIND_LATELY:
      state.latelyData.push(action.payload)
      return { ...state, latelyData: state.latelyData }
    default:
      return state
  }
}
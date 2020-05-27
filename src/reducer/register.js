import { FETCH_REGISTER_INTO } from '@/constants/actionTypes'

const defaultState = {
  registerData: {}
}

export default function registerReducer (state = defaultState, action) {
  switch (action.type) {
    case FETCH_REGISTER_INTO:
      console.log(action)
      return { ...state, registerData: action.payload  }
    default:
      return state
  }
}
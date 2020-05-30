import { FETCH_REGISTER_INTO, FETCH_REGISTER_VCODE } from '@/constants/actionTypes'

const defaultState = {
  registerData: {}
}

export default function registerReducer (state = defaultState, action) {
  switch (action.type) {
    case FETCH_REGISTER_INTO:
      return { ...state, registerData: action.payload  }
    case FETCH_REGISTER_VCODE:
      return { ...state, registerData: action.payload  }
    default:
      return state
  }
}
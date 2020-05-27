import { FETCH_LOGIN_INTO } from '@/constants/actionTypes'

const defaultState = {
  loginData: {}
}

export default function loginReducer (state = defaultState, action) {
  switch (action.type) {
    case FETCH_LOGIN_INTO:
      return { ...state, loginData: action.payload  }
    default:
      return state
  }
}
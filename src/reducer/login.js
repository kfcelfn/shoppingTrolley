import { FETCH_LOGIN_INTO, FETCH_LOGIN_OUT } from '@/constants/actionTypes'

const defaultState = {
  loginData: {}
}

export default function loginReducer (state = defaultState, action) {
  switch (action.type) {
    case FETCH_LOGIN_INTO:
      console.log(action.payload.data)
      return { ...state, loginData: action.payload.data }

    case FETCH_LOGIN_OUT:
      return { ...state, loginData: {}  }
    default:
      return state
  }
}
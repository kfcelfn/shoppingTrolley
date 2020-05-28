import { loginInto } from '@/services/login'
import { FETCH_LOGIN_INTO, FETCH_LOGIN_OUT } from '@/constants/actionTypes'

export function getLoginInto (options) {
  return {
    type: FETCH_LOGIN_INTO,
    payload: loginInto(options)
  }
}

export function outLogin () {
  return {
    type: FETCH_LOGIN_OUT
  }
}
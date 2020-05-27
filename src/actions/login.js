import { loginInto } from '@/services/login'
import { FETCH_LOGIN_INTO } from '@/constants/actionTypes'

export function getLoginInto (options) {
  return {
    type: FETCH_LOGIN_INTO,
    payload: loginInto(options)
  }
}
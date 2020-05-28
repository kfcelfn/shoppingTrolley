import { registerInto, registerVcode } from '@/services/register'
import { FETCH_REGISTER_INTO, FETCH_REGISTER_VCODE } from '@/constants/actionTypes'

export function getRegInto (options) {
  return {
    type: FETCH_REGISTER_INTO,
    payload: registerInto(options)
  }
}

export function getVcode (options) {
  return {
    type: FETCH_REGISTER_VCODE,
    payload: registerVcode(options)
  }
}
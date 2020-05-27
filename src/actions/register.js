import { registerInto } from '@/services/register'
import { FETCH_REGISTER_INTO } from '@/constants/actionTypes'

export function getRegInto (options) {
  return {
    type: FETCH_REGISTER_INTO,
    payload: registerInto(options)
  }
}
import { findHotData } from '@/services/find'
import { FETCH_FIND_HOTDATA, FETCH_FIND_LATELY ,FETCH_FIND_SEARCH } from '@/constants/actionTypes'

export function getFindData (options) {
  return {
    type: FETCH_FIND_HOTDATA,
    payload: findHotData()
  }
}

export function FindLately (options) {
  return {
    type: FETCH_FIND_LATELY,
    payload: options
  }
}
export function findSearch (options) {
  return {
    type: FETCH_FIND_SEARCH,
    payload: options
  }
}
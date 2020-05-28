import { findHotData } from '@/services/find'
import { FETCH_FIND_HOTDATA, FETCH_FIND_LATELY } from '@/constants/actionTypes'

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
import { findHotData } from '@/services/find'
import { FETCH_FIND_HOTDATA } from '@/constants/actionTypes'

export function getFindData (options) {
  return {
    type: FETCH_FIND_HOTDATA,
    payload: findHotData()
  }
}
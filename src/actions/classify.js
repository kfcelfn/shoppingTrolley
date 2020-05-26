import { classifyListData } from '@/services'
import { FETCH_CLASSIFY_DATA } from '@/constants/actionTypes'

export function getClassifyData (options) {
  return {
    type: FETCH_CLASSIFY_DATA,
    payload: classifyListData()
  }
}
import { shopsData } from '@/services'
import { FETCH_SHOPS_DATA } from '@/constants/actionTypes'

export function getShopData (options) {
  return {
    type: FETCH_SHOPS_DATA,
    payload: shopsData(options)
  }
}
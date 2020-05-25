import { goodsLeftList, goodsRightShop } from '@/services'
import { FETCH_GOODS_MENU, FETCH_GOODS_DATA } from '@/constants/actionTypes'

export function getMenuData (options) {
  return {
    type: FETCH_GOODS_MENU,
    payload: goodsLeftList()
  }
}

export function getShopData (options) {
  return {
    type: FETCH_GOODS_DATA,
    payload: goodsRightShop(options)
  }
}
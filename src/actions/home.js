import { banners , navApi , homeGoods , homeList } from '@/services/home'

export function bannerData (options) {
  return {
    type: 'HOME_BANNER',
    payload: banners(options)
  }
}
export function navApiData (options) {
	return {
		type: 'HOME_NAV',
		payload: navApi(options)
	}
}
export function homeGoodsData (options) {
	return {
		type: 'HOME_GOODS',
		payload: homeGoods(options)
	}
}
export function homeListData (options) {
	return {
		type: 'HOME_LIST',
		payload: homeList(options)
	}
}

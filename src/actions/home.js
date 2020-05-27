import { banners , navApi , homeGoods , homeList } from '@/services/home'

function bannerData (options) {
  return {
    type: 'HOME_BANNER',
    payload: banners(options)
  }
}

function navApiData (options) {
	return {
		type: 'HOME_NAV',
		payload: navApi(options)
	}
}

function homeGoodsData (options) {
	return {
		type: 'HOME_GOODS',
		payload: homeGoods(options)
	}
}

function homeListData (options) {
	return {
		type: 'HOME_LIST',
		payload: homeList(options)
	}
}
export {
	bannerData,
	navApiData,
	homeGoodsData,
	homeListData
}
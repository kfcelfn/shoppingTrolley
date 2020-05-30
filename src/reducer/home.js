const defaultState = {
	banners: [],
	navApi: [],
	homeGoods: [],
	homeList: [],
}
  
export default function homeReducer ( state = defaultState , { type ,payload }) {
	switch ( type ) {
		case 'HOME_BANNER':
			return { ...state, banners: payload.data  }
			
		case 'HOME_NAV':
			return { ...state, navApi: payload.data  }

		case 'HOME_GOODS':
			return { ...state, homeGoods: payload.data  }

		case 'HOME_LIST':
			return { ...state, homeList: payload.data  }

		default:
			return state
	}
}
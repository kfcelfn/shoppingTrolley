const defaultState = {
	banners: [],
	navApi: [],
	homeGoods: [],
	homeList: [],
}
  
export default function homeReducer ( state = defaultState , action ) {
	switch (action.type) {
		case 'HOME_BANNER':
			return { ...state, banners: action.payload.data  }
			
		case 'HOME_NAV':
			return { ...state, navApi: action.payload.data  }

		case 'HOME_GOODS':
			return { ...state, homeGoods: action.payload.data  }

		case 'HOME_LIST':
			return { ...state, homeList: action.payload.data  }

		default:
			return state
	}
}
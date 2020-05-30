import { DECIDE_DETAILS_DATA, DECIDE_COMMENT_DATA, DECIDE_COMMENT_DATA1,
         DECIDE_DETAILS_DATA1, DECIDE_ADD_DATA, DECIDE_PARAMETER_DATA ,
         DECIDE_DEL_DATA
        } from '@/constants/actionTypes'
const defaultState = {
  data:[],
  commitData:[],
  addToCarData:[],
  parameterData:[]
}

export default function detailsReducer(state = defaultState,action) {
  switch (action.type) {
    case DECIDE_DETAILS_DATA:
      return {...state, data: action.payload.data}
    case DECIDE_COMMENT_DATA:
      return {...state, commitData:action.payload.data}
    case DECIDE_COMMENT_DATA1:
      return {...state}
    case DECIDE_DETAILS_DATA1:
      return {...state}
    case DECIDE_ADD_DATA:
      return {...state, addToCarData:action.payload}
    case DECIDE_PARAMETER_DATA:
      state.parameterData.push(action.payload)
      return {...state, parameterData:state.parameterData}
    case DECIDE_DEL_DATA:
      
      return {...state, parameterData:action.payload}
    default:
      return state
  }
}
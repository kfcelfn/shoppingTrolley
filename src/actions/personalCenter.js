import { MY_ENSHRINE} from '@/constants/actionTypes';
import { myEnshrine } from '@/services/personalCenter' 

// 我的收藏
export const EnshrineFn = () => {
  return{
    type: MY_ENSHRINE, 
    payload: myEnshrine()
  }
}
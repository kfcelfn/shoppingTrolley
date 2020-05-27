import { ORDER_ALL, ORDER_STAYEVALUATE } from '@/constants/actionTypes';
import { orderAll, orderStayEvaluate } from '@/services/order' 
// 全部订单
const getAllData = () => {
  return{
    type: ORDER_ALL, 
    payload: orderAll()
  }
}
// 待评价
const getStayEvaluateData = () => {
  return{
    type: ORDER_STAYEVALUATE, 
    payload: orderStayEvaluate()
  }
}
export {
  getAllData,
  getStayEvaluateData,
}
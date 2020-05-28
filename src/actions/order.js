import { ORDER_ALL } from '@/constants/actionTypes';
import { orderAll } from '@/services/order' 

const getAllData = () => {
  return{
    type: ORDER_ALL, 
    payload: orderAll()
  }
}
export {
  getAllData,
}
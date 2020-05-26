<<<<<<< HEAD
import { post , get } from "@/utils/request"

export const BANNER = () =>{
  return get("http://vueshop.glbuys.com/api/home/index/slide?token=1ec949a15fb709370f")
}

export const NAV_API = () =>{
  return get("http://vueshop.glbuys.com/api/home/index/nav?token=1ec949a15fb709370f")
}

export const HOME_GOODS = () =>{
  return get("http://vueshop.glbuys.com/api/home/index/goodsLevel?token=1ec949a15fb709370f")
}
export const home_list = () =>{
  return get("http://vueshop.glbuys.com/api/home/index/recom?token=1ec949a15fb709370f")
=======
export default {
  // 我的订单
  orderAll: 'http://vueshop.glbuys.com/api/user/myorder/index?uid=696443691&status=all&token=1ec949a15fb709370f&page=1',
  //产品分类页左侧菜单
  goodsLeftList: 'http://vueshop.glbuys.com/api/home/category/menu?token=1ec949a15fb709370f'
>>>>>>> 506dbb10dce0993736bd6cc9a06437dc0ee168b9
}

import { post , get } from "@/utils/request"

export default {
  //产品分类页左侧菜单
  classifyListData: 'http://vueshop.glbuys.com/api/home/category/menu?token=1ec949a15fb709370f'
}

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
}
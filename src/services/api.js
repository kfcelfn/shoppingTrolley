const url = 'http://vueshop.glbuys.com'

export default {
  // 我的订单
  orderAll: url+'/api/user/myorder/index?uid=696443691&status=all&token=1ec949a15fb709370f&page=1',
  orderStayEvaluate: url+'/api/user/myorder/reviewOrder?uid=696443691&page=1&token=1ec949a15fb709370f',
  //产品分类页左侧菜单
  classifyListData: url+'/api/home/category/menu?token=1ec949a15fb709370f',
  //home
  banner: url+'/api/home/index/slide?token=1ec949a15fb709370f',
  navApi: url+'/api/home/index/nav?token=1ec949a15fb709370f',
  homeGoods: url+'/api/home/index/goodsLevel?token=1ec949a15fb709370f',
  homeList: url+'/api/home/index/recom?token=1ec949a15fb709370f',
}
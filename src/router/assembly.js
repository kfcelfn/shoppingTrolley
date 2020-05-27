
import loadable from '@/utils/loadable.js'
/**
 * 错误页面
*/
const Error = loadable( () => import('@/pages/404') );  //错误页面

/**
 * layout
*/
const Nav = loadable(() => import('@/layout/Nav'));
const Home = loadable( () => import('@/pages/home') );
const Cart = loadable( () => import('@/pages/cart') );
const My = loadable( () => import('@/pages/my') );
/*
  home首页
 */
const Banner = loadable( () => import('@@/Banner') );//首页轮播
const Homeheader = loadable( () => import('@/pages/home/header') );//首页头部组件
const HomeGoods = loadable( () => import('@/pages/home/homeComp/homeGoods') );//首页Goods组件
const childLt = loadable( () => import('@/pages/home/homeChild/childLt') );//首页Goods组件子组件
const childRig = loadable( () => import('@/pages/home/homeChild/childRig') );//首页Goods组件子组件
const HomeList = loadable( () => import('@/pages/home/homeList') );//首页为你推荐子路由


/**
 * 订单页面 
*/
const Order = loadable( () => import('@/pages/orderHome') ); //全部订单首页
const OrderStayPay = loadable( () => import('@/pages/orderStayPay') ); //待支付
const OrderStayTake = loadable( () => import('@/pages/orderStayTake') ); //待收货
const OrderAll = loadable( () => import('@/pages/orderAll') ); //全部订单主体页面
const OrderStayEvaluate = loadable( () => import('@/pages/orderStayEvaluate') ); //待评价
const DetailspageShop = loadable( () => import('@/pages/detailspageShop') ); //待评价

/**
 * 分类页面 
*/
const Shops = loadable( () => import('@/pages/shops'));
const Classify = loadable(() => import('@/pages/classify'));

export {
  Error,
  Home,
  Nav,
  Cart,
  My,
  Classify,
  Order,
  OrderStayPay,
  OrderStayTake,
  OrderStayEvaluate,
  DetailspageShop,
  OrderAll,
  Shops,
  Banner,
  Homeheader,
  HomeGoods,
  childLt,
  childRig,
  HomeList,
}


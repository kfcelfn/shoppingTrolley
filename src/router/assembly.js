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

/**
 * 订单页面 
*/
const Order = loadable( () => import('@/pages/orderHome') ); //全部订单首页
const OrderStayPay = loadable( () => import('@/pages/orderStayPay') ); //待支付
const OrderStayTake = loadable( () => import('@/pages/orderStayTake') ); //待收货
const OrderAll = loadable( () => import('@/pages/orderAll') ); //全部订单主体页面
const OrderStayEvaluate = loadable( () => import('@/pages/orderStayEvaluate') ); //待评价

/**
 * 分类页面 
*/
const Goods = loadable( () => import('@/pages/goods'));
const Shops = loadable( () => import('@/pages/shops'));

export {
  Error,
  Home,
  Nav,
  Cart,
  My,
  Order,
  OrderStayPay,
  OrderStayTake,
  OrderStayEvaluate,
  OrderAll,
  Goods,
  Shops,
}
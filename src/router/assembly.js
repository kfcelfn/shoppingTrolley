import loadable from '@/utils/loadable'

/**
 * layout
*/
const Nav =loadable(() => import('@/layout/Nav'));
const Home =loadable( () => import('@/pages/home') );
const Cart =loadable( () => import('@/pages/cart') );
const My =loadable( () => import('@/pages/my') );
const Classify = loadable(() => import('@/pages/classify'));
const Shops = loadable(() => import('@/pages/shops'));
const DetailspageDet =loadable( () => import('@/pages/detailspageDet') );
const DetailspageEvaluation =loadable( () => import('@/pages/detailspageEvaluation') );
const DetailspageShop =loadable( () => import('@/pages/detailspageShop') );
const Details = loadable( () => import('@/pages/detailspage') );
const MaskLayer = loadable( () => import('@/pages/masklayer') );
const Swiperimg = loadable( () => import('@/components/swiperimg') );



/** 错误页面
 * Error 404
*/
const Error = loadable(() => import('@/pages/404'));

/** layout布局
 *  Nav底部导航 Home首页 Cart购物车 My我的
*/
// const Nav = loadable(() => import('@/layout/Nav'));
// const Home = loadable(() => import('@/pages/home'));
// const Cart = loadable(() => import('@/pages/cart'));
// const My = loadable(() => import('@/pages/my'));

/** 订单页面  
 *  Order首页 OrderStayPay待支付 OrderStayTake待收货  OrderStayEvaluate待评价 OrderAll全部订单主体页面
*/
const Order = loadable(() => import('@/pages/orderHome'));
const OrderStayPay = loadable(() => import('@/pages/orderStayPay'));
const OrderStayTake = loadable(() => import('@/pages/orderStayTake'));
const OrderStayEvaluate = loadable(() => import('@/pages/orderStayEvaluate'));
const OrderAll = loadable(() => import('@/pages/orderAll')); 

/** 分类页面 
 *  Classify 分类首页 Shops分类右侧主体
*/

export {
  Error,
  Home,
  Nav,
  Cart,
  My,
  Details,
  DetailspageDet,
  DetailspageEvaluation,
  DetailspageShop,
  Swiperimg,
  Classify,
  Shops,
  Order,
  OrderStayPay,
  OrderStayTake,
  OrderStayEvaluate,
  OrderAll,
  MaskLayer,
}
  




  


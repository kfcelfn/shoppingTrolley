import loadable from '@/utils/loadable'


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
const Error = loadable(() => import('@/pages/404'));
const Order = loadable(() => import('@/pages/orderHome'));
const OrderStayPay = loadable(() => import('@/pages/orderStayPay'));
const OrderStayTake = loadable(() => import('@/pages/orderStayTake'));
const OrderStayEvaluate = loadable(() => import('@/pages/orderStayEvaluate'));
const OrderAll = loadable(() => import('@/pages/orderAll')); 

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
  




  


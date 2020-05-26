import loadable from '@/utils/loadable.js'
/** 错误
 * Error 404
*/
export const Error = loadable(() => import('@/pages/404'));

/** layout布局
 *  Nav底部导航 Home首页 Cart购物车 My我的
*/
export const Nav = loadable(() => import('@/layout/Nav'));
export const Home = loadable(() => import('@/pages/home'));
export const Cart = loadable(() => import('@/pages/cart'));
export const My = loadable(() => import('@/pages/my'));

/** 订单 
 *  Order首页 OrderStayPay待支付 OrderStayTake待收货  OrderStayEvaluate待评价 OrderAll全部订单主体页面
*/
export const Order = loadable(() => import('@/pages/orderHome'));
export const OrderStayPay = loadable(() => import('@/pages/orderStayPay'));
export const OrderStayTake = loadable(() => import('@/pages/orderStayTake'));
export const OrderStayEvaluate = loadable(() => import('@/pages/orderStayEvaluate'));
export const OrderAll = loadable(() => import('@/pages/orderAll')); 

/** 分类
 *  Classify 分类首页 Shops分类右侧主体
*/
export const Classify = loadable(() => import('@/pages/classify'));
export const Shops = loadable(() => import('@/pages/shops'));

/** 登录和注册 
 *  login登录 register注册
*/
export const Login = loadable(() => import('@/pages/login'));
export const Register = loadable(() => import('@/pages/register'));


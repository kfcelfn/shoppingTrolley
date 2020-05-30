import loadable from '@/utils/loadable.js'
/** 错误
 * Error 404
*/
export const Error = loadable(() => import('@/pages/error'));

/** layout布局
 *  Nav底部导航 Home首页 Cart购物车 My我的
*/
export const My = loadable(() => import('@/pages/my'));
export const Nav = loadable(() => import('@/layout/Nav'));
export const Home = loadable(() => import('@/pages/home'));
export const Cart = loadable(() => import('@/pages/cart'));

/** components公共组件
 *  Nav导航 
*/
export const PubulicNav = loadable(() => import('@/components/Nav'));
export const PubulicHeader = loadable(() => import('@/components/Header'));
export const Swiperimg = loadable( () => import('@/components/swiperimg') );

/** 订单 
 *  Order首页 OrderStayPay待支付 OrderStayTake待收货  OrderStayEvaluate待评价 OrderAll全部订单主体页面
*/
export const Order = loadable(() => import('@/pages/orderHome'));
export const OrderAll = loadable(() => import('@/pages/orderAll')); 
export const OrderStayPay = loadable(() => import('@/pages/orderStayPay'));
export const OrderStayTake = loadable(() => import('@/pages/orderStayTake'));
export const OrderStayEvaluate = loadable(() => import('@/pages/orderStayEvaluate'));

/** 我的、个人中心
 *  MyBindTel绑定手机 MyPlace收货地址 myEnshrine收藏 MyEditPassword修改密码 MyPersonalData个人资料
*/
export const MyPlace = loadable(() => import('@/pages/myPlace'));
export const MyBindTel = loadable(() => import('@/pages/myBindTel'));
export const MyEnshrine = loadable(() => import('@/pages/myEnshrine'));
export const MyEditPassword = loadable(() => import('@/pages/myEditPassword'));
export const MyPersonalData = loadable(() => import('@/pages/myPersonalData'));

/** 分类
 *  Classify 分类首页 Shops分类右侧主体
*/
export const Shops = loadable(() => import('@/pages/shops'));
export const Classify = loadable(() => import('@/pages/classify'));

/** 登录和注册 
 *  login登录 register注册
*/
export const Login = loadable(() => import('@/pages/login'));
export const Register = loadable(() => import('@/pages/register'));

/** 搜索页面 
 *  详情
 *  Details详情页主页面  MaskLayer详情页加入购物车  DetailspageDet详情页的详情页 DetailspageShop详情页的商品页 DetailspageShop详情页的评论页
*/
export const Find = loadable(() => import('@/pages/find'));
export const Searchs = loadable(() => import('@/pages/searchs'));

export const Details = loadable( () => import('@/pages/detailspage') );
export const MaskLayer = loadable( () => import('@/pages/masklayer') ); 
export const DetailspageDet =loadable( () => import('@/pages/detailspageDet') );
export const DetailspageShop =loadable( () => import('@/pages/detailspageShop') );
export const DetailspageEvaluation =loadable( () => import('@/pages/detailspageEvaluation') );



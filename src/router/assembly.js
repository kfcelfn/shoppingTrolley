import Loadable from '@/utils/loadable'

const Nav = Loadable(() => import('@/layout/Nav')); // layout
const Home = Loadable(() => import('@/pages/home'));
const Cart = Loadable(() => import('@/pages/cart'));
const My = Loadable(() => import('@/pages/my'));
const Classify = Loadable(() => import('@/pages/classify'));
const Shops = Loadable(() => import('@/pages/shops'));

export {
  Home,
  Nav,
  Cart,
  My,
  Classify,
  Shops
}




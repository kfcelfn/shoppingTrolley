import loadable from '@/utils/loadable.js'

/**
 * layout
*/
const Nav = loadable(() => import('@/layout/Nav'));
const Home = loadable( () => import('@/pages/home'));
const Cart = loadable( () => import('@/pages/cart'));
const My = loadable( () => import('@/pages/my'));
const Classify = loadable( () => import('@/pages/classify'));

export {
  Home,
  Nav,
  Cart,
  My,
  Classify
}
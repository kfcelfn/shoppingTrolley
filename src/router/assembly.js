import loadable from '@/utils/loadable.js'

/**
 * layout
*/
const Nav = loadable(() => import('@/layout/Nav'));
const Home = loadable( () => import('@/pages/home') );
const Cart = loadable( () => import('@/pages/cart') );
const My = loadable( () => import('@/pages/my') );


const Error = loadable( () => import('@/pages/404') );

export {
  Error,
  Home,
  Nav,
  Cart,
  My,
}
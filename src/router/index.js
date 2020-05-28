import { Error, Nav, Order, Classify, Shops, Cart, Home, My, Details } from './assembly';

const routes = [
  { path: '/404', component: Error },
  { path: '/order', component: Order },
  { path: '/details', component: Details },
  {
    path: '/classify',
    component: Classify,
    children: [
      {
        path: '/classify/shops/:cid',
        exact: true,
        component: Shops
      }
    ]
  },
  {
    path: "/",
    component: Nav,
    children: [
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/my',
        component: My
      },
      {
        path: '/',
        component: Home
      }
    ]
  }
]
export default routes

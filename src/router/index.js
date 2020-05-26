import { Nav, Order, Classify, Shops, Cart, Home, My, Find } from './assembly';

const routes = [
  { path: '/order', component: Order },
  { path: '/find', component: Find },
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

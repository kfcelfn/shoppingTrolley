import { Error, Nav, Order, Goods } from './assembly';

const routes = [
  { path: '/404', component: Error },
  { path: '/order', component: Order },
  { path: '/Goods', component: Goods },
  { path: '/', component: Nav },
]

export default routes

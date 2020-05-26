import { Error, Nav, Order } from './assembly';

const routes = [
  { path: '/404', component: Error },
  { path: '/order', component: Order },
  { path: '/', component: Nav },
]

export default routes
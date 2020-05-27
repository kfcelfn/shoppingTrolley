import * as type from './assembly';


const routes = [
  { path: '/404', component: type.Error },
  { path: '/login', component: type.Login },
  { path: '/register', component: type.Register },
  { path: '/find', component: type.Find },
  { path: '/bindtel', component: type.MyBindTel },
  { path: '/place', component: type.MyPlace },
  { path: '/enshrine', component: type.MyEnshrine },
  { path: '/editPassword', component: type.MyEditPassword },
  { path: '/personalData', component: type.MyPersonalData },
  { 
    path: '/order',
    component: type.Order,
    children: [
      { path: '/order/all', component: type.OrderAll },
      { path: '/order/pay', component: type.OrderStayPay },
      { path: '/order/take', component: type.OrderStayTake },
      { path: '/order/evaluate', component: type.OrderStayEvaluate },
    ]
  },
  {
    path: '/classify',
    component: type.Classify,
    children: [
      { path: '/classify/shops/:cid', exact: true, component: type.Shops }
    ]
  },
  {
    path: "/",
    component: type.Nav,
    children: [
      { path: '/cart', component: type.Cart },
      { path: '/my', component: type.My },
      { path: '/', component: type.Home }
    ]
  }
]

export default routes


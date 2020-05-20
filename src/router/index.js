import loadable from '@/utils/loadable.js'

const Error = loadable( () => import('@/pages/404') );
const Login = loadable( () => import('@/pages/login') );

export default [
  {
    path:'/',
    exact: true,
    component: Login
  },
  {
    path:'/404',
    exact: true,
    component: Error
  },
]
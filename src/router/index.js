import loadable from '@/utils/loadable.js'

const Error = loadable( () => import('@/pages/404') );

export default [
  {
    path:'/',
    exact: true,
    component: Error
  }
]
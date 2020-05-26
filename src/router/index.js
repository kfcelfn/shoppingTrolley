import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from 'react-router-config'
import { Nav, Classify, Shops, Cart, Home, My } from './assembly';

import '@/utils/rem'
import '@/styles/index.less';
import '@/utils/reset.css'

const routes = [
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

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    )
  }
}


import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Nav, Goods } from './assembly';

import '@/utils/rem'
import '@/styles/index.less';
import '@/utils/reset.css'  

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/goods' component={Goods}/>
          <Route path='/' component={Nav}/>     
        </Switch>
      </BrowserRouter>
    )
  }
}

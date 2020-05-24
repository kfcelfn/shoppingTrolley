import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Error, Nav } from './assembly';

import '@/utils/rem'
import '@/styles/index.less';
import '@/utils/reset.css'  

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch> 
          <Route path='/404' component={Error}/>     
          <Route path='/' component={Nav}/>     
        </Switch>
      </BrowserRouter>
    )
  }
}

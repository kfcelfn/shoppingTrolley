import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { Home, Cart, My} from '@/router/assembly';
import Nav from '@@/Nav'
import './styles.less'

export default class Basic extends Component {
  state = {
    navData: [
      {id: 1, title: '首页', icon:'icon-shouye', to: '/'},
      {id: 2, title: '购物车', icon:'icon-gouwuche', to: '/cart'},
      {id: 3, title: '我的', icon:'icon-wode', to: '/my'},
    ]
  }

  render() {
    const { navData } = this.state

    return (
      <div className='layout-nav'>
        <section className='section'>
          <Switch>
            <Route path='/cart' component={ Cart } />
            <Route path='/my' component={ My } />
            <Route path='/' component={ Home } />
          </Switch>
        </section>

        <Nav navData={navData} />
      </div>
    )
  }
}

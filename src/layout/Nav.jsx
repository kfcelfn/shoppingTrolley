import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config'
import { PubulicNav } from '@/router/assembly'
import './styles.less'

export default class Basic extends Component {
  
  state = {
    navData: [
      { id: 1, title: '首页', icon: 'icon-shouye', to: '/' },
      { id: 2, title: '购物车', icon: 'icon-gouwuche', to: '/cart' },
      { id: 3, title: '我的', icon: 'icon-wode', to: '/my' }
    ]
  }

  render() {
    const { navData } = this.state
    return (
      <div className='layout-nav'>
        <>
          {renderRoutes(this.props.route.children)}
        </>
        <PubulicNav data={navData} type='homeNav' />
      </div>
    )
  }
}

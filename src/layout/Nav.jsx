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
<<<<<<< HEAD
        <>
          {renderRoutes(this.props.route.children)}
        </>
<<<<<<< HEAD
=======
        <section className='section'>
          {renderRoutes(this.props.route.children)}
        </section>
>>>>>>> 9e07f34ec7d42f43cfe7a2fcd5b03e288a14edf3
        <Nav navData={navData} />
=======
        <PubulicNav data={navData} type='homeNav' />
>>>>>>> 762ac22a125213e101cb56441108f8b8d8d035fe
      </div>
    )
  }
}

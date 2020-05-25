import React, { Component } from 'react'
import './styles.less'
import { Shops } from '@/router/assembly'
import { connect } from 'react-redux'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import { getMenuData } from '@/actions/goods'

@connect(state => {
  return {
    menuData: state.goods.menuData
  }
}, {
  getMenuData
})

class Index extends Component {
  state = {
    menuData: []
  }

  componentDidMount () {
    this.props.getMenuData()
  }

  render() {
    const { menuData } = this.props
    return (
      <div className='pages-goods'>
        <div className='header'>
          
        </div>
        <div className='section'>
          <div className='section-left'>
            {
               menuData.length ?
               menuData.map(item => {
                 return (
                  <div 
                    className='list-item' 
                    key={item.cid}
                  >
                    <NavLink to={`/goods/shops/${item.cid}`}>
                      <span>{item.title}</span>
                    </NavLink>
                  </div>
                 )
               }) : null
            }
          </div>
          <div className='section-right'>
            {/* 二级路由 */}
            <Switch>
              <Route path='/goods/shops/:cid' component={Shops} />
              <Redirect from='/goods' to='goods/shops/492' />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default Index



import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Icon } from 'antd';
import './styles.less'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1838763_ceogqnmym26.js',
  scriptUrl: '//at.alicdn.com/t/font_1838763_63cpoof6369.js',
});

/*
 * data 你需要传入的数据
 * type 传入的页面，'homeNav'上下布局中nav 'myNav'我的页面nav
*/

export default class Nav extends Component {
  domBox = option => {
    const { data } = this.props

    return (
      <>
        {
          data.map(item => {
            return (
              <li className={option} key={item.id}>
                <NavLink to={item.to} exact className='clear-nav'>
                  <IconFont type={item.icon} />
                  <span>{item.title}</span>
                </NavLink>
              </li>
            )
          })
        }
      </>
    )
  }

  publicFn = () => {
    const { type } = this.props

    if( type == 'homeNav' ) {
      return this.domBox('home-nav')

    }else if( type == 'myNav' ){
      return this.domBox('my-nav')

    }
  }

  render() {
    return (
      <div className='components-nav'>
        <ul className='navWrap'>
           { this.publicFn() }
        </ul>
      </div>
    )
  }
}

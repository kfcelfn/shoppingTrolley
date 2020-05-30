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
  domBox = data => {
    return (
      <>
        {
          data.map(item => {
            return (
              <div className='nav-main' key={item.id}>
                <NavLink to={item.to} exact className='clear-nav'>
                  { item.icon ? <IconFont type={item.icon} className='icon' /> : <></> }
                  <span>{item.title}</span>
                </NavLink>
              </div>
            )
          })
        }
      </>
    )
  }

  publicFn = () => {
    const { type, data } = this.props

    if( type == 'homeNav' || type == 'myNav' ) {
      return this.domBox(data)

    }else if(type == 'listNav'){
      return this.domBox(data)

    }
  }

  render() {
    return (
      <div className='components-nav'>
        { this.publicFn() }
      </div>
    )
  }
}

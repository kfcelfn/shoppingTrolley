import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Icon } from 'antd';
import './styles.less'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1838763_7ot685icidi.js',
});

export default class Nav extends Component {
  render() {
    const { navData } = this.props

    return (
      <div className='components-nav'>
        <ul className='footer-nav'>
          {
            navData.map(item => {
              return (
                <li key={item.id}>
                  <NavLink to={item.to} exact className='clear-nav'>
                    <IconFont type={item.icon} />
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

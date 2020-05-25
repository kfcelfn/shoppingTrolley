import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';
import './style.css'

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1838763_7ot685icidi.js',
});

export default class index extends Component {
    state = {
      gid:143208071
    }
  render() {
      const {gid} = this.state
      return (
          <div className='components-detailHead'>
              <div className='components-detailHead-le'>
                    <NavLink exact to='/'>{'<'}</NavLink>
              </div>
              <div className='components-detailHead-body'>
                    <NavLink exact to={`/details/${gid}`}><span>商品</span></NavLink>
                    <NavLink exact to='/details/det'><span>详情</span></NavLink>
                    <NavLink exact to='/details/evaluation'><span>评价</span></NavLink>
              </div>
              <div className='components-detailHead-ri'>
                    <NavLink exact to='/cart'><IconFont type='icon-gouwuche'/></NavLink>
              </div>
          </div>
      )
    }
}

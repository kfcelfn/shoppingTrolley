import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Icon } from 'antd';
import './styles.less'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1838763_ceogqnmym26.js',
});

/*
 * navData 你需要传入的数据
 * isShow 为true 是首页底部nav， flase 是订单页列表
*/
export default class Nav extends Component {
  render() {
    const { navData, isShow = true } = this.props

    return (
      <div className='components-nav'>
        <ul className={isShow ? 'home-nav-wrap' : 'list-nav-wrap'} id='commonStyle'>
          {
            navData.map(item => {
              return (
                <React.Fragment key={item.id}>
                  {
                    isShow ?
                    <li className='home-nav'>
                      <NavLink to={item.to} exact className='clear-nav'>
                        <IconFont type={item.icon} />
                        <span>{item.title}</span>
                      </NavLink>
                    </li> :
                    <li className='list-nav'>
                      <NavLink to={item.to} exact className='clear-nav'>
                        <span>{item.title}</span>
                      </NavLink>
                    </li>
                  }
                </React.Fragment>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

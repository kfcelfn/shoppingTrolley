import React, { Component } from 'react'
import { Input } from 'antd';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom'
=======
>>>>>>> 8d5453392697296637caf2a5861691e374538dcc
import { UnorderedListOutlined, SearchOutlined } from '@ant-design/icons';
import "./styles.less"

export default class index extends Component {
  render() {
    return (
      <div className="header">
        <div className="headerTop">
<<<<<<< HEAD
          <p>
            <NavLink to='/classify'>
              <UnorderedListOutlined style={{ fontSize: "0.4rem" }} />
            </NavLink>
          </p>
=======
          <p><UnorderedListOutlined style={{ fontSize: "0.4rem" }} /></p>
>>>>>>> 8d5453392697296637caf2a5861691e374538dcc
          <p><Input placeholder="请输入宝贝名称" prefix={<SearchOutlined />} /></p>
          <p>登录</p>
        </div>
      </div>
    )
  }
}
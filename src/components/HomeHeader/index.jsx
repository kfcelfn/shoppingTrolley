import React, { Component } from 'react'
import { Input } from 'antd';
import { UnorderedListOutlined, SearchOutlined } from '@ant-design/icons';
import "./styles.less"

export default class index extends Component {
  render() {
    return (
      <div className="header">
        <div className="headerTop">
          <p><UnorderedListOutlined style={{ fontSize: "0.4rem" }} /></p>
          <p><Input placeholder="请输入宝贝名称" prefix={<SearchOutlined />} /></p>
          <p>登录</p>
        </div>
      </div>
    )
  }
}
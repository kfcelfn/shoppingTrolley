import React, { Component } from 'react'
import { Input } from 'antd';
import { UnorderedListOutlined , SearchOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"
import "./header.less"
export default class index extends Component {
	render() {
		const { headerStyle } = this.props

		return (
			<div className="header">    
				<div className={headerStyle ? 'headerTop' : 'headerTops'}>
					<Link to="/classify/shops/492">
						<p><UnorderedListOutlined style={{fontSize:"0.4rem"}}/></p>
					</Link>
					<p><Input placeholder="请输入宝贝名称" prefix={<SearchOutlined />} /></p>
					<Link to="/login"> <p>登录</p> </Link>
				</div>
			</div>
		)
	}
}
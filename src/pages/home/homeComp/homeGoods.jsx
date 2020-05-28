import React, { Component } from 'react'
import ChildLt from "../homeChild/childLt"
import ChildRig from "../homeChild/childRig"
import "./goods.less"

export default class HomeGoods extends Component {
	render() {
		let { data } = this.props
		return (
			<div className="home_Goods">
				<div className="home_GoodsTop">
					———  {data.title}  ———
				</div>
				<div className="home_GoodsBoy">
				{
					data.items.length === 7 ? <ChildLt data={data.items}/> 
																	: <ChildRig  data={data.items} />
				} 
				</div>	
			</div>
		)
	}
}

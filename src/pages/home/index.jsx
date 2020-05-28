import React, { Component } from 'react'
import Banner from "@/components/Banner"
import { Link } from "react-router-dom"
import { bannerData, navApiData, homeGoodsData, homeListData } from '@/actions/home'
import { connect } from "react-redux"
import HomeGoods from "./homeComp/homeGoods"
import Header from "./header"
import HomeList from "./homeList"
import "./style.less"

export default @connect(({ homes }) => {
	return {
		bannerDatas: homes.banners,
		navData: homes.navApi,
		goodsData: homes.homeGoods,
		homelist: homes.homeList
	}
}, {
	bannerData,
	navApiData,
	homeGoodsData,
	homeListData
})

class extends Component {
	state = {
		headerStyle: true
	}

	componentDidMount() {
		const { bannerData, navApiData, homeGoodsData, homeListData } = this.props

		bannerData()
		navApiData()
		homeGoodsData()
		homeListData()

	}

	myClick = (cid) => {
		console.log(cid)
	}

	onScrollEvent = event => {
		event.target.scrollTop > 50 ?
			this.setState({ headerStyle: false }) :
			this.setState({ headerStyle: true })
	}

	render() {
		let { bannerDatas, navData, goodsData, homelist } = this.props

		return (
			<div className="pages_home" onScrollCapture={(event) => this.onScrollEvent(event)}>
				<div className="pages_home_header">
					<Header headerStyle={this.state.headerStyle} />
				</div>
				<div className="pages_home_banner">
					{
						bannerData.length ? <Banner bannerData={bannerDatas} />
							: null
					}
				</div>
				<div className="pages_home_nav">
					{
						navData.map((v, i) => {
							return (
								<dl key={v.cid}>
									<Link to={`/classify/shops/${v.cid}`} >
										<dt><img src={v.image} /></dt>
										<dd>{v.title}</dd>
									</Link>
								</dl>
							)
						})
					}
				</div>
				<div className="pages_home_goods">
					{
						goodsData.map((v, i) => {
							return <HomeGoods data={v} key={i} />
						})
					}
				</div>
				<div className="pages_home_list">
					<div className="pages_home_listTop">
						—————  为你推荐  —————
				</div>
					<div className="pages_home_listBoy">
						{
							homelist.map((v, i) => {
								return <HomeList key={v.gid} data={v} />
							})
						}
					</div>
				</div>
			</div>
		)
	}
}

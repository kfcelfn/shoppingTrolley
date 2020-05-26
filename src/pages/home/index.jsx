import React, { Component } from 'react'
import Banner from "@/components/Banner"
import { BANNER , NAV_API , HOME_GOODS , home_list } from '@/services/api'
import HomeGoods from "./homeComp/homeGoods"
import Header from "../../components/Header"
import HomeList from "./homeList"
import "./style.less"

export default class index extends Component {
    state = {
        bannerData:[],
        navData:[],
        goodsData:[],
        homelist:[]
    }
    componentDidMount( ){
        BANNER().then(res => {
            if(res.code === 200){
                this.setState({
                    bannerData:res.data
                })
            }
        })
        NAV_API().then(res => {
            if(res.code === 200){
                this.setState({
                    navData:res.data
                })
            }
        })
        HOME_GOODS().then(res => {
            if(res.code === 200){
                this.setState({
                    goodsData:res.data
                })
            }
        })
        home_list().then(res => {
            if(res.code === 200){
                this.setState({
                    homelist:res.data
                })
            }
        })
    }
    render () {
        let { bannerData , navData , goodsData , homelist} = this.state
        return (
            <div className="pages_home">
                <div className="pages_home_header">
                    <Header/>
                </div>
                <div className="pages_home_banner">
                    {
                        bannerData.length ? <Banner bannerData={bannerData}/>
                        :null
                    }
                </div>
                <div className="pages_home_nav">
                    {
                        navData.map((v,i) => {
                            return  <dl key={v.cid}>
                                        <dt><img src={v.image} /></dt>
                                        <dd>{v.title}</dd>
                                    </dl>
                        })
                    }
                </div>
                <div className="pages_home_goods">
                   {
                       goodsData.map((v,i) => {
                           return <HomeGoods data={v}  key={i}/>
                       })
                   }
                </div>
                <div className="pages_home_list">
                    <div className="pages_home_listTop">
                            —————  为你推荐  —————
                    </div>
                    <div className="pages_home_listBoy">
                        {
                            homelist.map((v,i) => {
                                return <HomeList key={v.gid} data={v}/>
                            })
                        }
                    </div>
                  
                </div>
            </div>
        )
    }
}

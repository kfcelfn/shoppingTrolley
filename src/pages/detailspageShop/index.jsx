import React, { Component } from 'react'
import { Swiperimg, MaskLayer } from '@/router/assembly'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { detailsAction, commentAction} from '@/actions/details'
import './style.css'


export default @connect(state => {
    return {
        data:state.details.data,
        commitData:state.details.commitData
    }
    },{
        detailsAction,
        commentAction
    })
class index extends Component {
    state = {
        gid:'',
        show:false
    }
    fn = () => {
        this.setState({
            show:!this.state.show
        })
    }
    componentDidMount(){
        //从父级页面接收gid
        const gid=this.props.match.params.gid
        //将gid传给详情页商品的接口
        this.props.detailsAction(gid)
        //将gid传给详情页评论的接口
        this.props.commentAction(gid)
        this.setState({
            gid:gid
        })
    }
    render() {
        const { data, commitData } =this.props
        return (
        <div className='pages-detailspageShop'>
            {
                <div className='pages-detailspageShop-body'>
                    <Swiperimg img={data.images}/>
                    <div className='detailspageShop-body-list'>
                    <p>{data.title}</p>
                    <p className='detailspageShop-body-price'>￥{data.price}</p>
                    <p className='detailspageShop-body-Express'>
                        <span>快递：{data.freight}元</span>
                        <span>月销量{data.sales}件</span>
                    </p>
                    </div>
                    <div className='pages-detailspageShop-bodyEvaluation'>
                            <p>商品评价({commitData != '没有数据' ? commitData.length : 0})</p>
                        {
                            commitData !== ''  ?  commitData !== '没有数据' ? 
                                commitData.map((v,i) => {
                                    return (
                                        <div className='detailspageShop-bodyEvaluation-list' key={i}>
                                            <p><span className='dS-list-img'><img src={v.head}></img></span>
                                                <span className='detailspageShop-bodyEvaluation-listName'>{v.nickname}</span>
                                            </p>
                                            <p className='detailspageShop-bodyEvaluation-listD'>{v.content}</p>
                                            <p>{v.times}</p>
                                        </div>
                                    )
                                }) : <p>没有相关数据</p>
                            : null  
                        }
                        <div className='look-more'>
                            <NavLink to={`/details/evaluation/shop/${this.state.gid}`}>
                                <button>查看更多评价</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            } 
            <div className='pages-detailspageShop-foot'>
                <div className='detailspageShop-foot-but1'>
                    <button>收藏</button>
                </div>
                <div className='detailspageShop-foot-but2'>
                    <button onClick={this.fn}>加入购物车</button>
                </div>
            </div>
            {
                this.state.show?
                <div className='Mask-layer'>
                    <MaskLayer click={this.fn} gid={this.state.gid}/>
                </div>
                :null
            }
            
        </div>
        )
    }
}
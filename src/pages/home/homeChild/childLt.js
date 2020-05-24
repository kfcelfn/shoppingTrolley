import React, { Component } from 'react'


export default class HomeGoods extends Component {
    render() {
        // let { data } = this.props
        // console.log(data)
        return (
            <div className="home_Goods_chilLt">
                {
                    <div className="home_GoodsBoyLt">
                        <p> { v.title } </p>
                        <p> { v.price } </p>
                        <p><img src={v.image}/></p>
                    </div>
                }  
            </div>
        )
    }
}

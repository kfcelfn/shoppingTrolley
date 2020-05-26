import React, { Component } from 'react'
import "./style.less"


export default class ChildLt extends Component {
    render() {
        let { data } = this.props
        let one = data.slice(0, 2)
        let bottom01 = data.slice(2)
        return (
            <div className="home_Goods_chilLt">
                <div className="home_childRig">
                {
                    one.map((v,i) => {
                        return <ul>
                                    <li> { v.title } </li>
                                    <li> 火爆开售 </li>
                                    <li> <img src={v.image}/> </li>
                                </ul>
                    })
                }
                </div>
                <div className="home_GoodsBoyfoo">
                {
                    bottom01.map((item,index) => {
                        return<div className="home_Goodsfooter" key={item.gid}>
                                <p> {item.title} </p>
                                <p><img src={item.image} /></p>
                                <p>￥{item.price} </p>
                            </div>
                    })
                }
                </div> 
                    
            </div>
        )
    }
}

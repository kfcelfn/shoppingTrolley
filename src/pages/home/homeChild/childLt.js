import React, { Component } from 'react'
import "./style.less"


export default class ChildLt extends Component {
    render() {
        let { data } = this.props
        let one = data.slice(0, 1)
        let two = data.slice(1, 3)
        let bottom01 = data.slice(3)
        return (
            <div className="home_Goods_chilLt">
                <div className="home_GoodsBoyLt">
                    <ul>
                        <li> {one[0].title} </li>
                        <li> ￥{one[0].price} </li>
                        <li> <img src={one[0].image} /> </li>
                    </ul>
                    <div className="home_GoodsBoyRig">
                        {
                            two.map((v, i) => {
                                return <dl key={v.gid}>
                                    <dd>
                                        <p> {v.title} </p>
                                        <p> 精品挑选 </p>
                                    </dd>
                                    <dt><img src={v.image} /></dt>
                                </dl>
                            })
                        }
                    </div>
                </div>
                <div className="home_GoodsBoyfoo">
                    {
                        bottom01.map((item, index) => {
                            return <div className="home_Goodsfooter" key={item.gid}>
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

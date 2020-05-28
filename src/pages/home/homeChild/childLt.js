import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import "./style.less"

export default @withRouter
class extends Component {

  particulars = () => {
    this.props.history.push("/detailspageShop")
  }
  render() {
    let { data } = this.props
    let one = data.slice(0, 1)
    let two = data.slice(1, 3)
    let bottom01 = data.slice(3)
    return (
      <div className="home_Goods_chilLt">
        <div className="home_GoodsBoyLt">
          <ul onClick={this.particulars}>
            <li> {one[0].title} </li>
            <li> ￥{one[0].price} </li>
            <li> <img src={one[0].image} /> </li>
          </ul>
          <div className="home_GoodsBoyRig">
          {
            two.map((v, i) => {
              return (
                <dl key={i} onClick={this.particulars}>
                  <dd>
                    <p> {v.title} </p>
                    <p> 精品挑选 </p>
                  </dd>
                  <dt><img src={v.image} /></dt>
                </dl>
              )
            })
          }
          </div>
          </div>
          <div className="home_GoodsBoyfoo">
          {
            bottom01.map((item, index) => {
              return (
                <div 
                  className="home_Goodsfooter" 
                  key={index}
                  onClick={this.particulars}
                >
                  <p> {item.title} </p>
                  <p><img src={item.image} /></p>
                  <p>￥{item.price} </p>
                </div>
              )
            })
          }
          </div>
      </div>
    )
  }
}
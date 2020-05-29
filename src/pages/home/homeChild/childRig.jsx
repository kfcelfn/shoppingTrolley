import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import "./style.less"

export default  @withRouter
class ChildLt extends Component {
  particulars = (gid) => {
    this.props.history.push("/details/"+gid)
  }
  render() {
    let { data } = this.props
    let one = data.slice(0, 2)
    let bottom01 = data.slice(2)
    return (
      <div className="home_Goods_chilLt">
        <div className="home_childRig">
          {
            one.map((v, i) => {
              return (
                <ul key={i} onClick={()=>this.particulars(v.gid)}>
                  <li> {v.title} </li>
                  <li> 火爆开售 </li>
                  <li> <img src={v.image} /> </li>
                </ul>
              )
            })
          }
        </div>
        <div className="home_GoodsBoyfoo">
          {
            bottom01.map((item, index) => {
              return (
                <div
                  onClick={()=>this.particulars(item.gid)}
                  className="home_Goodsfooter"
                  key={item.gid}>
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

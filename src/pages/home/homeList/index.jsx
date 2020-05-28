import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./homeList.less"

export default class HomeList extends Component {
render() {
  let { data } = this.props
  
  return (
    <div className="HomeList">
    <Link to="/detailspageShop">
      <dl>
        <dt><img src={data.image}/></dt>
        <dd>
            <p>{data.title}</p>
            <p>￥{data.price}</p>
        </dd>
      </dl>
      </Link>
    </div>
    )
  }
}
import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./about.less"

export default class index extends Component {

  render() {
  let { data } = this.props
  return (
    <div className="about"> 
      <dl>
        <Link to={`/details/${data.gid}`}>
        <dt> <img src={data.image} /></dt>
        <dd>
          <p>{data.title}</p>
          <p>￥{data.price}</p>
          <p>销售<span>{data.sales}</span> 件</p>
        </dd>
        </Link>
      </dl>
    </div>
    )
  }
}
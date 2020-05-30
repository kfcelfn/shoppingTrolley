import React, { Component } from 'react'
import "./about.less"

export default class index extends Component {

  render() {
  let { data } = this.props
  return (
    <div className="about"> 
      <dl>
        <dt> <img src={data.image} /></dt>
        <dd>
          <p>{data.title}</p>
          <p>￥{data.price}</p>
          <p>销售<span>{data.cid}</span> 件</p>
        </dd>
      </dl>
    </div>
    )
  }
}
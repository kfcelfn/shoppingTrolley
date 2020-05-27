import React, { Component } from 'react'
import "./homeList.less"

export default class HomeList extends Component {
  render() {
    let { data } = this.props
    
    return (
      <div className="HomeList">
        <dl>
          <dt><img src={data.image} /></dt>
          <dd>
            <p>{data.title}</p>
            <p>￥{data.price}</p>
          </dd>
        </dl>
      </div>
    )
  }
}

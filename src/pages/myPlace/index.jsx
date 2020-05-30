import React, { Component } from 'react'
import Header from '@@/Header'

export default class MyPlace extends Component {
  render() {
    return (
      <div className='pages-myPlace'>
        <Header isGoBack='show' title='收货管理' />
      </div>
    )
  }
}

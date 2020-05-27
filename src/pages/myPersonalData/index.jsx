import React, { Component } from 'react'
import Header from '@@/Header'

export default class MyPersonalData extends Component {
  render() {
    return (
      <div className='pages-personal-data'>
        <Header isGoBack='show' title='个人资料' save='保存' />
      </div>
    )
  }
}

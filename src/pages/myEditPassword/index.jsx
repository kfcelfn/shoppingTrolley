import React, { Component } from 'react'
import Header from '@@/Header'

export default class MyEditPassword extends Component {
  render() {
    return (
      <div className='pages-myEditPassword'>
        <Header isGoBack='show' title='修改密码' />
      </div>
    )
  }
}

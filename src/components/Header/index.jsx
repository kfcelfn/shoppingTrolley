import React, { Component } from 'react'
import './styles.less'

export default class Cart extends Component {
  render() {
    const { title } = this.props
    
    return (
      <div className='components-header'>
        {title}
      </div>
    )
  }
}

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';
import { connect } from 'react-redux'
import { detailsAction1 } from '@/actions/details'
import './styles.less'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1838763_7ot685icidi.js',
}, {
  detailsAction1
});

export default @connect(state => {
  return {
    data: state.details.data
  }
})
class extends Component {
  fn = () => {
    window.history.back(-1)
  }
  render() {
    const { data } = this.props

    return (
      <div className='components-detailHead'>
        <div className='components-detailHead-le'>
          <div onClick={this.fn}>{'<'}</div>
        </div>
        <div className='components-detailHead-body'>
          <NavLink exact to={`/details/${data.gid}`}><span>商品</span></NavLink>
          <NavLink exact to='/details/det'><span>详情</span></NavLink>
          <NavLink exact to='/details/evaluation'><span>评价</span></NavLink>
        </div>
        <div className='components-detailHead-ri'>
          <NavLink exact to='/cart'><IconFont type='icon-gouwuche' /></NavLink>
        </div>
      </div>
    )
  }
}

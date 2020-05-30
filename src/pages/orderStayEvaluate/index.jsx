import React, { Component } from 'react'
import { connect } from 'react-redux';
import OrderList from '@@/OrderList'

export default @connect( state => {
  return{
    orderStayEvaluate: state.order.orderStayEvaluate
  }
},{
})

class extends Component {
  render() {
    const { orderStayEvaluate } = this.props

    return (
      <div className='page_orderStayEvaluate'>
        <OrderList orderList={orderStayEvaluate} />
      </div>
    )
  }
}
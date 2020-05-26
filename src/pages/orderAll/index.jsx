import React, { Component } from 'react'
import { connect } from 'react-redux';
import OrderList from '@@/OrderList'

export default @connect( state => {
  return{
    orderAll: state.order.orderAll
  }
},{
})
class extends Component {
  render() {
    const { orderAll } = this.props
    
    return (
      <div className='page_order-all'>
        <OrderList orderList={orderAll} />
      </div>
    )
  }
}

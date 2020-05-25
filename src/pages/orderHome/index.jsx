import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { OrderAll, OrderStayPay, OrderStayTake, OrderStayEvaluate } from '@/router/assembly'
import Header from '@@/Header'
import Nav from '@@/Nav'
import { getAllData } from '@/actions/order'
import './styles.less'

export default @connect( () => { return{} },{
  getAllData
})
class extends Component {
  state = {
    listData: [
      {id: 1, title: '全部订单', to: '/order/all'},
      {id: 2, title: '待支付', to: '/order/pay'},
      {id: 3, title: '代收货', to: '/order/take'},
      {id: 4, title: '待评价', to: '/order/evaluate'},
    ]
  }
  
  componentDidMount () {
    this.props.getAllData()
  }

  render() {
    const { listData } = this.state
    return (
      <div className='pages-order'>
        <Header isGoBack='show' title='全部订单' />
        
        <Nav navData={listData} isShow={false} />

        <section className='section'>
          <Switch>
            <Route path='/order/all' component={ OrderAll } />
            <Route path='/order/pay' component={ OrderStayPay } />
            <Route path='/order/take' component={ OrderStayTake } />
            <Route path='/order/evaluate' component={ OrderStayEvaluate } />
            <Redirect to='/order/all' exact/>
          </Switch>
        </section>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux';
import Header from '@@/Header'
import Nav from '@@/Nav'
import { getAllData, getStayEvaluateData } from '@/actions/order'
import './styles.less'

const obj = {
  '/order/all': '全部订单',
  '/order/pay': '待支付',
  '/order/take': '待收货',
  '/order/evaluate': '待评价',
}

export default @connect( () => { return{} },{
  getAllData,
  getStayEvaluateData,
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
    this.props.getStayEvaluateData()
  }

  render() {
    const { listData } = this.state
    const { pathname } = this.props.location

    return (
      <div className='pages-order'>
        <Header isGoBack='show' title={obj[pathname]} />
        
        <Nav navData={listData} isShow={false} />

        <section className='section'>
          {renderRoutes(this.props.route.children)}
          {/* <Redirect to='/order/all' /> */}
        </section>
      </div>
    )
  }
}

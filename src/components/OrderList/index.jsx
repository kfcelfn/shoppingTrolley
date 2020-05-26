import React, { Component } from 'react'
import './styles.less'

export default class OrderList extends Component {
  render() {
    const { orderList } = this.props

    return (
      <div className='components-order'>
        {
          orderList.map((item,index) => {
            return (
             <div className='mainWrap' key={index}>
               <h1 className='title'>
                 <span>订单编号：{item.ordernum}</span>
                 <span>{item.status == 2 ? '已收货' : '' }</span>
               </h1>
               {
                 item.goods.map(v => {
                   return (
                     <dl className='main' key={v.gid}>
                       <dt><p><img src={v.image} /></p></dt>
                       <dd>{v.title}</dd>
                     </dl>
                   )
                 })
               }
               <div className='sum'>
                 <span>实付金额：￥{item.total}</span>
                 <span>
                   <i>已收货</i>
                 </span>
               </div>
             </div>
            )
          })
        }
      </div>
    )
  }
}

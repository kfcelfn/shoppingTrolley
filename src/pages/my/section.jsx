import React, { Component } from 'react'
import { Avatar } from 'antd';
import { withRouter } from 'react-router-dom'
import Nav from '@@/Nav'
import './styles.less'

export default @withRouter
class extends Component {
  state = {
    orderData: [
      {id: 1, title: '待支付', icon:'icon-daizhifu', to: '/order/pay'},
      {id: 2, title: '待收货', icon:'icon-daishouhuo', to: '/order/take'},
      {id: 3, title: '待评价', icon:'icon-daipingjia', to: '/order/evaluate'},
    ],
    userInformation: [
      {id: 1, title: '个人资料', to: '/personalData'},
      {id: 2, title: '收货地址', to: '/place'},
      {id: 3, title: '绑定手机', to: '/bindtel' },
      {id: 4, title: '修改密码', to: '/editPassword' },
      {id: 5, title: '我的收藏', to: '/enshrine' },
    ]
  }

  onLogin = () => {
    this.props.history.push('/login')
  }

  editData = url => {
    this.props.history.push(url)
  }

  render() {
    const { orderData, userInformation} = this.state

    return (
      <div className='my-section'>
        <header className='header-user'>
          <div className='user-image'>
            <Avatar size={64} icon="user" />
            <div className='nickname'>
              <p><span>昵称</span></p>
              <p><span>我的积分：{0}</span></p>
            </div>
          </div>
        </header>

        <div className='order-form'>
          <span>全部订单</span>
          <span onClick={()=>this.props.history.push('/order/all')}>查看全部订单 ></span>
        </div>

        <div className='order-status'>
          <Nav navData={orderData} />
        </div>

        <div className='user-information'>
          {
            userInformation.map(item => {
              return (
                <p key={item.id} onClick={()=>this.editData(item.to)}>
                  <span>{item.title}</span>
                  <span><i>></i></span>
                </p>
              )
            })
          }
        </div>

        <div className='loginAndRegister'>
          <p onClick={this.onLogin}>登录/注册</p>
        </div>
      </div>
    )
  }
}

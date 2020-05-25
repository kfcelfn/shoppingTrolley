import React, { Component } from 'react'
import { Avatar } from 'antd';
import Nav from '@@/Nav'
import './styles.less'

export default class Section extends Component {
  state = {
    orderData: [
      {id: 1, title: '待支付', icon:'icon-daizhifu', to: '/'},
      {id: 2, title: '待收货', icon:'icon-daishouhuo', to: '/'},
      {id: 3, title: '待评价', icon:'icon-daipingjia', to: '/'},
    ],
    userInformation: [
      {id: 1, title: '个人资料', to: ''},
      {id: 2, title: '收货地址', to: ''},
      {id: 3, title: '绑定手机', to: '' },
      {id: 4, title: '修改密码', to: '' },
      {id: 5, title: '我的搜藏', to: '' },
    ]
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
          <span>查看全部订单 ></span>
        </div>

        <div className='order-status'>
          <Nav navData={orderData} />
        </div>

        <div className='user-information'>
          {
            userInformation.map(item => {
              return (
                <p key={item.id}>
                  <span>{item.title}</span>
                  <span><i>></i></span>
                </p>
              )
            })
          }
        </div>

        <div className='loginAndRegister'>
          <p>登录/注册</p>
        </div>
      </div>
    )
  }
}

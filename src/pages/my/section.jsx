import React, { Component } from 'react'
import { Avatar } from 'antd';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { PubulicNav } from '@/router/assembly'
import { outLogin } from '@/actions/login'
import './styles.less'

export default @connect(({ login }) => {
  return {
    login: login.loginData
  }
},{
  outLogin
})
@withRouter
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
    ],
    visible: false
  }

  onLogin = () => {
    const { login } = this.props
<<<<<<< HEAD
=======

    if(login.uid) {
      console.log(11)
      this.setState({visible: true})
    }else{
      this.props.history.push('/login')
    }
   
  }
>>>>>>> 762ac22a125213e101cb56441108f8b8d8d035fe

    if(login.uid) {
      console.log(11)
      this.setState({visible: true})
    }else{
      this.props.history.push('/login')
    }
  }
  editData = url => {
    this.props.history.push(url)
  }

  onCancel = () => {
    this.setState({visible: false})
  }

  onOk = () => {
    this.setState({visible: false})
    this.props.outLogin()
  }

  render() {
    const { orderData, userInformation, visible } = this.state
    const { nickname='', uid='', utype = 0 } = this.props.login

<<<<<<< HEAD
  return (
    <div className='my-section'>
      <header className='header-user'>
        <div className='user-image'>
          <Avatar size={64} icon="user" />
          <div className='nickname'>
            <p><span>{ nickname ? nickname : '昵称'}</span></p>
            <p><span>我的积分：{utype}</span></p>
=======
    return (
      <div className='my-section'>
        <header className='header-user'>
          <div className='user-image'>
            <Avatar size={64} icon="user" />
            <div className='nickname'>
              <p><span>{ nickname ? nickname : '昵称'}</span></p>
              <p><span>我的积分：{utype}</span></p>
            </div>
>>>>>>> 762ac22a125213e101cb56441108f8b8d8d035fe
          </div>
        </div>
      </header>

<<<<<<< HEAD
      <div className='order-form'>
        <span>全部订单</span>
        <span onClick={()=>this.props.history.push('/order/all')}>查看全部订单 ></span>
      </div>
=======
        <div className='order-status'>
          <PubulicNav data={orderData} type='myNav' />
        </div>
>>>>>>> 762ac22a125213e101cb56441108f8b8d8d035fe

      <div className='order-status'>
        <PubulicNav data={orderData} type='myNav' />
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

<<<<<<< HEAD
      <div className='loginAndRegister'>
        <p onClick={this.onLogin}>{ uid ? '安全退出' : '登录/注册'}</p>
      </div>

      <div className={visible ? 'modelShow' : 'modelHide'}>
        <div className='dialog_wrap'>
          <div className='dialog_content'>
            确定要退出么？
          </div>
          <div className='dialog_footer'>
            <span className='dialog_cancel' onClick={this.onCancel}>取消</span>
            <span className='dialog_text' onClick={this.onOk}>确定</span>
=======
        <div className='loginAndRegister'>
          <p onClick={this.onLogin}>{ uid ? '安全退出' : '登录/注册'}</p>
        </div>

        <div className={visible ? 'modelShow' : 'modelHide'}>
          <div className='dialog_wrap'>
            <div className='dialog_content'>
              确定要退出么？
            </div>
            <div className='dialog_footer'>
              <span className='dialog_cancel' onClick={this.onCancel}>取消</span>
              <span className='dialog_text' onClick={this.onOk}>确定</span>
            </div>
>>>>>>> 762ac22a125213e101cb56441108f8b8d8d035fe
          </div>
        </div>
      </div>
    </div>
    )
  }
}
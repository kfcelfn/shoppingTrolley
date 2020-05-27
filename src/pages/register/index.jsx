import React, { Component } from 'react'
import { Switch } from 'antd';
import { connect } from 'react-redux'
import { getRegInto } from '@/actions/register'
import Header from '@@/Header'
import './styles.less'

@connect(state => {
  return {

  }
}, {
  getRegInto
})

class Register extends Component {
  onRegister = () => {
    const cellphone = this.cellphone.value
    const password = this.password.value
    const registerObj = { cellphone, password, vcode: ''  }
    this.props.getRegInto(registerObj)
  }

  onChange = checked => {
    this.password.type = checked ? 'text' : 'password'
  }
  render() {
    return (
      <div className='pages-register'>
        <Header isGoBack='show' title='会员注册' />
        
        <section className='section'>
          <p className='auth-code'>
            <input type="text" placeholder='验证码' ref={input=>{this.authCode=input}} />
          </p>
          <p className='cellphone'>
            <input type="text" placeholder='请输入手机号' ref={input=>{this.cellphone=input}} />
            <span>
              获取短信验证码
            </span>
          </p>
          <p className='message-auth-code'>
            <input type="text" placeholder='请输入短信验证码' ref={input=>{this.messageAuthCode=input}} />
          </p>
          <p className='password'>
            <input type="password" placeholder='请输入密码' ref={input=>{this.password=input}}  />
            <Switch onChange={this.onChange} />
          </p>
          <p className='register'>
            <span onClick={this.onRegister}>注册</span>
          </p>
        </section>
      </div>
    )
  }
}

export default Register

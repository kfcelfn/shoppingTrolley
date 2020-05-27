import React, { Component } from 'react'
import { Switch } from 'antd';
import Header from '@@/Header'
import './styles.less'

export default class Register extends Component {
  onRegister = () => {
    // console.log( this.authCode.value )
    // console.log( this.cellphone.value )
    // console.log( this.messageAuthCode.value )
    // console.log( this.password.value )
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

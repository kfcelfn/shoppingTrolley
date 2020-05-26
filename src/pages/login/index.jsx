import React, { Component } from 'react'
import { Switch } from 'antd';
import Header from '@@/Header'
import './styles.less'

export default class Login extends Component {
  onLogin = () => {
    // console.log( this.cellphone.value )
    // console.log( this.password.value )
  }

  onChange = checked => {
    this.password.type = checked ? 'text' : 'password'
  }
  render() {
    return (
      <div className='pages-login'>
        <Header isGoBack='show' title='会员登录' />
        
        <section className='section'>
          <p className='cellphone'>
            <input type="text" placeholder='手机号' ref={input=>{this.cellphone=input}} />
          </p>
          <p className='password'>
            <input type="password" placeholder='密码' ref={input=>{this.password=input}}  />
            <Switch onChange={this.onChange} />
          </p>
          <p className='login'>
            <span onClick={this.onLogin}>登录</span>
          </p>
          <p className='reg'>
            <span>忘记密码</span>
            <span onClick={()=>this.props.history.push('/register')}>快速注册</span>
          </p>
        </section>
      </div>
    )
  }
}

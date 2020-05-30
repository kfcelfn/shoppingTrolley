import React, { Component } from 'react'
import { Switch } from 'antd';
import { connect } from 'react-redux'
import { getRegInto, getVcode } from '@/actions/register'
import Header from '@@/Header'
import './styles.less'

@connect(({ register }) => {
  const { registerData } = register
  return {
    registerData
  }
}, {
  getRegInto
})

class Register extends Component {

  state = {
    url: 'http://vueshop.glbuys.com',
    phoneStatus: null,
    pwdStatus: null
  }

  myRegExp = registerObj => {
    const { cellphone, password } = registerObj
    const phoneRegExp = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/
    const pwdRegExp = /^[\w]{2,10}$/
    const phoneStatus = phoneRegExp.test(cellphone)
    const pwdStatus = pwdRegExp.test(password)
    this.props.getRegInto(registerObj)
    this.setState({
      phoneStatus,
      pwdStatus
    }, () => {
      const { phoneStatus, pwdStatus } = this.state
      if (!phoneStatus && !pwdStatus) {
        alert('手机号不正确')
      } else if (!phoneStatus) {
        alert('手机号不正确')
      } else if (!pwdStatus) {
        alert('密码不正确')
      } else {
        this.props.getRegInto(registerObj)
          .then(() => {
            const { code, data } = this.props.registerData
            if (code === 200) {
              alert('注册成功')
              this.props.history.push('/login')
            } else {
              alert(data)
            }
          })
      }
    })
  }

  onRegister = () => {
    const cellphone = this.cellphone.value
    const password = this.password.value
    const authCode = this.authCode.value
    const registerObj = { cellphone, password, vcode: authCode }
    this.myRegExp(registerObj)
  }

  onChange = checked => {
    this.password.type = checked ? 'text' : 'password'
  }

  render() {
    const { url } = this.state
    return (
      <div className='pages-register'>
        <Header isGoBack='show' title='会员注册' />
        <section className='section'>
          <p className='auth-code'>
            <input type="text" placeholder='验证码' ref={input => { this.authCode = input }} />
            <img
              src={`${url}/api/vcode/chkcode?token=1ec949a15fb709370f`}
              alt=""
            />
          </p>
          <p className='cellphone'>
            <input
              type="text"
              placeholder='请输入手机号'
              ref={input => { this.cellphone = input }}
            />
            <span>
              获取短信验证码
            </span>
          </p>
          <p className='message-auth-code'>
            <input
              type="text"
              placeholder='请输入短信验证码(不用填)'
              ref={input => { this.messageAuthCode = input }}
            />
          </p>
          <p className='password'>
            <input type="password" placeholder='请输入密码' ref={input => { this.password = input }} />
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

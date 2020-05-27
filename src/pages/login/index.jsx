import React, { Component } from 'react'
import { Switch } from 'antd';
import { connect } from 'react-redux'
import { getLoginInto } from '@/actions/login'
import Header from '@@/Header'
import './styles.less'


@connect(({ login }) => {
  const { loginData } = login
  return {
    loginData
  }
}, {
  getLoginInto
})

class Login extends Component {
  state = {
    phoneStatus: null,
    pwdStatus: null
  }

  myRegExp = (loginObj) => {
    const { cellphone, password } = loginObj
    const phoneRegExp = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/
    const pwdRegExp =  /^[\w]{2,10}$/
    const phoneStatus = phoneRegExp.test(cellphone)
    const pwdStatus = pwdRegExp.test(password)
    this.setState({ 
      phoneStatus, 
      pwdStatus 
    }, () => {
      const { phoneStatus, pwdStatus  } = this.state
      if (!phoneStatus && !pwdStatus) {
        alert('手机号不正确')
      } else if (!phoneStatus) {
        alert('手机号不正确')
      } else if(!pwdStatus) {
        alert('密码不正确')
      } else {
        this.props.getLoginInto(loginObj)
          .then(() => {
            const { code } = this.props.loginData
            if (code === 200) {
              alert('登录成功')
              this.props.history.push('/my')
            }
          })
      }
    })  
  }

  onLogin = () => {
    const cellphone = this.cellphone.value
    const password = this.password.value
    const loginObj = { cellphone, password  }
    this.myRegExp(loginObj)
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

export default Login

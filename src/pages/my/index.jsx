import React, { Component } from 'react'
import Header from '@@/Header'
import Section from './section'
import { connect } from 'react-redux'
import './styles.less'

@connect(({ login }) => {
  return {
    login
  }
})

class My extends Component {
  render() {
    // console.log(this.props.login) //用户数据
    return (
      <div className='pages-my'>
        <Header title='个人中心'/>

        <section className='section'>
          <Section />
        </section>
      </div>
    )
  }
}

export default My
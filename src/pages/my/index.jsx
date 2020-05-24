import React, { Component } from 'react'
import Header from '@@/Header'
import Section from './section'
import './styles.less'

export default class My extends Component {
  render() {
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

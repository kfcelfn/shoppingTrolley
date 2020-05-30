import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from '@@/Header'
import { EnshrineFn } from '@/actions/personalCenter'
import './styles.less'

export default @connect( state => {
   return{
    enshrineData : state.personalCenter.enshrineData  //我的收藏数据
   } 
},{
  EnshrineFn,
})
class extends Component {
  componentDidMount () {
    this.props.EnshrineFn()
  }
  render() {
    const { enshrineData } = this.props

    return (
      <div className='page-enshrine'>
        <Header isGoBack='show' title='我的收藏' />
        
        <section className='section'>
          {
            enshrineData.map((item,index) => {
              return (
                <dl key={index}>
                  <dt><p><img src={item.image} /></p></dt>
                  <dd>
                    <h2>{item.title}</h2>
                    <h6>¥{item.price}</h6>
                    <p>
                      <span>购买</span>
                      <span>删除</span>
                    </p>
                  </dd>
                </dl>
              )
            })
          }
        </section>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Checkbox } from 'antd';
import { connect } from 'react-redux'
import { PubulicHeader  } from '@/router/assembly'
import './styles.less'

export default @connect(state => {
  return {
    data:state.details.data,
    parameterData:state.details.parameterData,
  }
})
class Cart extends Component {
  componentDidMount(){
    // this.props.detailsAction1()
    // this.props.parameterAction()
    console.log(this.props)
  }
  render() {
    console.log(this.props)
    return (
      <div className='pages-cart'>
        <PubulicHeader  title='购物车' />

        <section className='section'>
 
        </section>
        <footer className='footer'>
          <div className='select-total'>
            <div className='select-all'>
              <Checkbox>全选</Checkbox>
            </div>
            <div className='total'>
              <span>运费：</span>
              <span className='color'>￥<i>0</i></span>
              <span>合计：</span>
              <span className='color'>￥<i>0</i></span>
            </div>
          </div>
          
          <div className='clearing'>
            <span>去结算</span>
          </div>
        </footer>
      </div>
    )
  }
}
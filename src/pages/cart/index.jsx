import React, { Component } from 'react'
import { Checkbox } from 'antd';
import { PubulicHeader  } from '@/router/assembly'
import './styles.less'

export default class Cart extends Component {
  render() {
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

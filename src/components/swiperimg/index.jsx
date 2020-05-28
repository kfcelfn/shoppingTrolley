import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import './style.css'

export default class index extends Component {
  state={
    arr:[]
  }
  componentDidMount(){
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
  }
  render() {
    //从详情页的商品页将图片的数据拿到
    const {img} = this.props
    return (
      <div className="swiper-container">
          <div className="swiper-wrapper">
              {
                  img?
                  img.map(v=>{
                      return (
                          <div className="swiper-slide"><img src={v}/></div>
                      )
                  })
                  :null
              }
          </div>
          <div className="swiper-pagination"></div>
      </div>
    )
  }
}

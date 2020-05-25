import React, { Component } from 'react'
import Axios from 'axios'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import './style.css'

export default class index extends Component {
  state={
      arr:[]
  }
  componentDidMount(){
      //从父级页面接收gid
      const gid=this.props.match.params.gid
      //循环数据找出与传来的gid相等的数据
      Axios.get('http://vueshop.glbuys.com/api/home/index/goodsLevel?token=1ec949a15fb709370f')
          .then(res => {
            const data=res.data.data
            const newdata=[]
            console.log(data)
            data.filter(v => {
              return newdata.push(v.items)
            })
            console.log(newdata.flat(Infinity))
            const xx=newdata.flat(Infinity).filter(v => {
              return v.gid==gid
            })
            console.log(xx)
            this.setState({
              arr:xx
            })
          })
          var swiper = new Swiper('.swiper-container', {
              pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                  renderBullet: function (index, className) {
                      return '<span class="' + className + '"></span>';
                  },
              },
          });
    
  }
  render() {
    const {arr} = this.state
    // const brr=arr[0]
    // console.log(brr,111)
    return (
      <div className='pages-detailspageShop'>
          <div className='pages-detailspageShop-body'>
              <div className="swiper-container">
                  <div className="swiper-wrapper">
                      <div className="swiper-slide"><img src=''></img></div>
                      <div className="swiper-slide">}</div>
                  </div>
                  <div className="swiper-pagination"></div>
              </div>
          </div>
          <div className='pages-detailspageShop-foot'>
              <div className='detailspageShop-foot-but1'>
                  收藏
              </div>
              <div className='detailspageShop-foot-but2'>
                  加入购物车
              </div>
          </div>
      </div>
    )
  }
}

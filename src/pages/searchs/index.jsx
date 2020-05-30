import React, { Component } from 'react'
import {  Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { connect } from "react-redux"
import { findSearch } from '@/actions/find'
import About from "./about"
import HeaderInput from "@/components/HeaderInput"
import goback from "@/assets/goback.png"
import "./searchs.less"


const { SubMenu } = Menu;

export default @connect(({ find }) => {
  return {
    searchData: find.searchData,
  }
})

class index extends Component {
  state = {
    classles:'',
    issales:false,
    priceto:'',
    data:[]
  }
  handleMenuClick = (e) => {
    console.log('click', e);
  }
  sales = () => {
    const { searchData } = this.props
    let isflag = false
    let datas = searchData.data.sort((a,b) => {
        if(this.state.issales == false){
          isflag = true
          return b.sales - a.sales 
        }else{
          isflag = false
          return a.sales - b.sales
        }
      })
    this.setState({
      classles:'classles',
      data: datas,
      issales: isflag
    })
  }
  up = (price) => {
    const { searchData } = this.props
    let datas = searchData.data.sort((a,b) => {
        if(price == 'ce1'){
          return a.price - b.price 
        }else if(price == 'ce2') {
          return b.price - a.price
        }else if(price == 'ce0'){
          return a.price - b.price 
        }
      })
    this.setState({
      data: datas
    })
  }
  gobackFun = () => {
    const { history } = this.props
      history.push('/home')
  }
  findClik = () => {
    const { history } = this.props
      history.push('/find')
  }
  render() {
    let { searchData } = this.props
    let { classles , data } = this.state
    return (
      <div className="searchs"> 
      <div className="searchsInput">
        <HeaderInput 
          onChange={this.onChange}
          gobackFun={this.gobackFun}
          findClik={this.findClik}
          propertyObj={{
            pageName: "searchs",
            img: { goback },
            text: { filter: '筛选' },
            putText: "请输入宝贝名称"
          }}
        />  
      </div>
      <div className="searchsfilter">
        <div className="filtrate">
          <Menu>
            <SubMenu key="sub1" icon={<DownOutlined/>} title="综合">
              <Menu.Item key="1">
                <span onClick={() => this.up("ce0")}>综合</span>
              </Menu.Item>
              <Menu.Item key="2">
                <span onClick={() => this.up("ce1")}>价格从低到高</span>
              </Menu.Item>
              <Menu.Item key="3">
                <span onClick={() => this.up("ce2")}>价格从高到低</span>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <p 
          onClick={this.sales} 
          className={classles != '' ? 'classles' : ''}
        >销量</p>
      </div>
      {
        searchData.code === 200 ?
        <div className="searchsAbout">
        { 
          classles == 'classles' ?
            data.map((v,i) => {
              return <About key={i} data={v}/>
            }):
            searchData.data.map((v,i) => {
              return <About key={i} data={v}/>
            })
        }
        </div>:<div className="searchstab">没有相关产品</div>
      }
      </div>
    )
  }
}

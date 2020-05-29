import React, { Component } from 'react'
import { Layout, Menu, Button } from 'antd';
import { DownOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import About from "./about"
import HeaderInput from "../../components/HeaderInput"
import axios from "axios"
import "./searchs.less"


const { SubMenu } = Menu;
export default class index extends Component {
  state = {
    data:[]
  }
  componentDidMount(){
    
  }
  handleMenuClick = (e) => {
    console.log('click', e);
  }
  render() {
  let { data } = this.state
  console.log(data)
  return (
    <div className="searchs"> 
    <div className="searchsInput">
      <HeaderInput />  
    </div>
    <div className="searchsfilter">
      <div className="filtrate">
        <Menu>
          <SubMenu key="sub1" icon={<DownOutlined/>} title="综合">
            <Menu.Item key="1">综合</Menu.Item>
            <Menu.Item key="2">价格从低到高</Menu.Item>
            <Menu.Item key="3">价格从高到低</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <p>销量</p>
    </div>
    <div className="searchsAbout">
    {
      data.map((v,i) => {
        return <About key={i} data={v}/>
      })
    }
    </div>
    </div>
    )
  }
}

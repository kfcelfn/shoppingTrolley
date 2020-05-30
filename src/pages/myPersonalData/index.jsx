import React, { Component } from 'react'
import { Select } from 'antd';
import { PubulicHeader } from '@/router/assembly'
import './styles.less'

export default class MyPersonalData extends Component {
  handleChange = value => {
    console.log(`selected ${value}`);
  }
  render() {
    const { Option } = Select;

    return (
      <div className='pages-personal-data'>
        <PubulicHeader isGoBack='show' title='个人资料' save='保存' />

        <section className='section'>
          <div className='publicStyle'>
            <span>头像</span>
          </div>
          <div className='publicStyle'>
            <span>昵称</span>
            <input type="text" placeholder='请输入昵称' />
          </div>
          <div className='publicStyle'>
            <span>性别</span>
            <Select onChange={this.handleChange} style={{ width: 70 }} defaultValue="nan">
              <Option value="nan">男</Option>
              <Option value="nv">女</Option>
            </Select>
          </div>
        </section>
      </div>
    )
  }
}

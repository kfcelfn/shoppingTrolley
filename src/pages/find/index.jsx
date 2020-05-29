import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFindData , findSearch } from '@/actions/find'
import HeaderInput from '@@/HeaderInput'
import closefind from '@/assets/closefind.png'
import findShop from '@/assets/findShop.png'
import { findSearchData } from "../../services/find"
import './styles.less'

@connect(state => {
  return {
    hotData: state.find.hotData,
    latelyData: state.find.latelyData,
    searchData: state.find.searchData
  }
}, {
  getFindData,
  findSearch
})

class Index extends Component {

  state = {
    latelyFind: [] ,//最近搜索
  }

  componentDidMount() {
    this.props.getFindData()
  }
  findRouter = (val) =>{
    console.log(val)
    findSearchData(latelyFind)
    .then(res => {
      console.log(res)
      this.props.findSearch(res)
    })
    this.setState({
      latelyFind:val
    })
  }
  onChange = (e,latelyFind )=>{
    console.log(e)
    findSearchData(latelyFind)
    .then(res => {
      console.log(res)
      this.props.findSearch(res)
    })
  }
  render() {
    const { hotData, latelyData } = this.props
    return (
      <div className="pages-find">
        <HeaderInput
          onChange={this.onChange}
          putText="请输入宝贝名称"
          imgUrl={closefind}
          findUrl={findShop}
          type="find"
        />
        <div className="body">
          <div className="lately-find">
            <div className="lately-top">
              <div>
                <p>最近搜索</p>
              </div>
              <div></div>
              <div>
                <p>删除</p>
              </div>
            </div>
            <div className="lately-end">
              {
                latelyData.length ?
                latelyData.map(item => {
                  return (
                    <div className="keywords">
                      {item}
                    </div>
                  )
                }) : <p style={{fontSize: "0.23rem"}}>空空如也</p>
              }
            </div>
          </div>
          <div className="hot-find">
            <div className="hot-top">
              <div>
                <p>热门搜索</p>
              </div>
              <div></div>
              <div></div>
            </div>
            <div className="hot-end">
              {
                hotData.length ?
                  hotData.map((item, index) => {
                    return (
                      <div 
                        key={index} 
                        className="keywords"
                        onClick={() => this.findRouter(item.title)} 
                      >
                        {item.title === '' ? '空壳' : item.title}
                      </div>
                    )
                  }) : null
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index

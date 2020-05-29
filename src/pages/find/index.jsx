import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFindData , findSearch } from '@/actions/find'
import HeaderInput from '@@/HeaderInput'
import closefind from '@/assets/closefind.png'
import findShop from '@/assets/findShop.png'
import FindDle from "./findeDel"
import './styles.less'

@connect(({ find }) => {
  return {
    hotData: find.hotData,
    latelyData: find.latelyData,
    searchData: find.searchData,
  }
}, {
  getFindData,
  findSearch,
})

class Index extends Component {
  state = {
    latelyFind: [] ,//最近搜索
  }
  componentDidMount() {
    this.props.getFindData()
  }
  findRouter = (val) =>{
    const { findSearch , history} = this.props
          findSearch(val)
          history.push("/searchs")
  }
  onChange = ( val ) => {
    let vales = val.value
    const { findSearch , history} = this.props
          findSearch(vales)
          history.push("/searchs")
  }
  render() {
    const { hotData, latelyData } = this.props
    return (
      <div className="pages-find">
        <HeaderInput 
          onChange={this.onChange}
          propertyObj={{
            pageName: "find",
            img: { closefind, findShop },
            text: {  },
            putText: "请输入宝贝名称"
          }}
        />
        <div className="body">
          <div className="lately-find">
            <div className="lately-top">
              <div>
                <p>最近搜索</p>
              </div>
              <div></div>
              <div>
                <FindDle/>
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

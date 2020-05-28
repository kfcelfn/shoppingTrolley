import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFindData } from '@/actions/find'
import HeaderInput from '@@/HeaderInput'
import closefind from '@/assets/closefind.png'
import findShop from '@/assets/findShop.png'
import './styles.less'

@connect(state => {
  return {
    hotData: state.find.hotData,
    latelyData: state.find.latelyData
  }
}, {
  getFindData
})

class Index extends Component {

  state = {
    //最近搜索
    latelyFind: []
  }

  componentDidMount() {
    this.props.getFindData()
  }

  render() {
    const { hotData, latelyData } = this.props
    return (
      <div className="pages-find">
        <HeaderInput
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
                      <div key={index} className="keywords">
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

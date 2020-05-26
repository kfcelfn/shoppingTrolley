import React, { Component } from 'react'
import goback from '@/assets/goback.png'
import HeaderInput from '@@/HeaderInput'
import { connect } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { getClassifyData } from '@/actions/classify'
import './styles.less'

@connect(state => {
  return {
    listData: state.classify.listData
  }
}, {
  getClassifyData
})

class Index extends Component {

  state = {
    listData: []
  }

  componentDidMount() {
    this.props.getClassifyData()
  }

  render() {
    const { listData } = this.props
    return (
      <div className="pages-goods">
        <HeaderInput putText="请输入宝贝名称" imgUrl={goback} />
        <div className="section">
          <div className="section-left">
            {
              listData.length ?
                listData.map(item => {
                  return (
                    <div
                      className="list-item"
                      key={item.cid}
                    >
                      <NavLink to={`/classify/shops/${item.cid}`}>
                        <span>{item.title}</span>
                      </NavLink>
                    </div>
                  )
                }) : null
            }
          </div>
          <div className="section-right">
            {/* 二级路由 */}
            {renderRoutes(this.props.route.children)}
            <Redirect from='/classify' to='/classify/shops/492' />
          </div>
        </div>
      </div>
    )
  }
}

export default Index
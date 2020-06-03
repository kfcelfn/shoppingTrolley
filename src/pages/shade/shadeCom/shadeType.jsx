import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getClassifyData } from '@/actions/classify'
import './shadeType.less'


export default @connect(state => {
  return {
    listData: state.classify.listData
  }
  }, {
    getClassifyData
  })
class index extends Component {
  state = {
    onli:false
  }
  componentDidMount(){
    this.props.getClassifyData()
  }
  Shde = ( data ) => {
    let { listData } = this.props
    
  }
  render() {
  let { listData } = this.props
  let { onli } = this.state
    return (
      <div className="shadeType">
        <p>分类</p>
        <ul>
        {
          listData.map((v,i) => {
            return (
              <li 
                key={v.cid} 
                className={ onli ? 'onli' : ''}
                onClick={() => this.Shde(v)}
              >
                {v.title}
              </li>)
          })
        }
        </ul>
      </div>
    )
  }
}

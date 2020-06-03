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
    let datas = false
    let isdata = listData.filter(v => {
      if(v.cid == data.cid){
        console.log(v.cid ,data.cid)
        return  datas = true
      }else{
        return  datas = false
      }
    })
    if(isdata){}
    this.setState({
      onli:datas
    })
  }
  render() {
  let { listData } = this.props
  let { onli } = this.state
  console.log(listData)
 
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

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import goback from '@/assets/goback.png'
import "./styles.less"

/* 传入参数： 
<<<<<<< HEAD
 * isGoBack 返回，如果需要显示， 就传入show
import './styles.less'

/* 传入参数： 
 * goBack 返回，如果需要显示， 就传入show
=======
 * isGoBack 返回按钮，如果需要显示， 就传入show
>>>>>>> 762ac22a125213e101cb56441108f8b8d8d035fe
 * titile 标题 
 * type: 参数：basics 基础布局，只显示中间标题 
 *             goBack 配合isGoBack使用
 * save 保存
*/
export default @withRouter
class extends Component {
  basicsBox = () => {
    const { isGoBack='', title='', save='' } = this.props

    return (
      <>
        <p className='goBack'>
          <img 
            src={goback} 
            onClick={this.goBack} 
            className={ !isGoBack ? 'hide' : 'show' } 
          />
        </p>
        <h2>{title}</h2>
        <h6 className='save'>{save}</h6>
      </>
    )
  }

  // 回退
  goBack = () => {
    const { title } = this.props

    if( title == '全部订单' ){
      this.props.history.push('/my')
    }else{
      this.props.history.go(-1)
    }
  }

  render() {
    return (
      <div className='components-header'>
        { this.basicsBox() }
      </div>
    )
  }
}

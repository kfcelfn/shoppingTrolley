import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import goback from '@/assets/goback.png'
import "./styles.less"

/* 传入参数： 
 * isGoBack 返回，如果需要显示， 就传入show
 * titile 标题 
 * save 保存
*/
export default @withRouter
class extends Component {
  goBack = () => {
    const { title } = this.props
    
    if( title == '全部订单' ){
      this.props.history.push('/my')
    }else{
      this.props.history.go(-1)
    }
  }

  render() {
    const { isGoBack='', title='', save='' } = this.props
    
    return (
      <div className='components-header'>
        <p className='goBack'>
          <img 
            src={goback} 
            onClick={this.goBack} 
            className={ !isGoBack ? 'hide' : 'show' } 
          />
        </p>
        <h2>{title}</h2>
        <h6 className='save'>{save}</h6>
      </div>
    )
  }
}

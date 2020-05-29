import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { FindLately } from '@/actions/find'
import './styles.less'

@connect(state => {
  return {

  }
}, {
  FindLately
})

class Index extends Component {

  state = {
    putText: '', //输入框placeholder
    imgUrl: '', //图片地址
    type: '',
    findUrl: ''
  }

  componentDidMount() {
    const { putText, imgUrl, type, findUrl } = this.props
    this.setState({ putText, imgUrl, type, findUrl })
  }

  findLately = () => {
    const putValue = this.refs.findPut.value
    putValue === '' ? alert('输入框不能为空') : 
    this.props.FindLately(putValue)
    //在这里跳转
  }

  render() {
    const { putText, imgUrl, type, findUrl } = this.state
    const { onChange } = this.props
    return (
      <div className="common-headerinput">
        <div className="left">
          {
            type === 'find' ?
              <NavLink to='/classify'>
                <div>
                  <img src={imgUrl} alt="" />
                </div>
              </NavLink> :
              <NavLink to='/'>
                <div>
                  <img src={imgUrl} alt="" />
                  <div className="find-box">
            
                  </div>
                </div>
              </NavLink>
          }
        </div>
        <div className="right">
          <div className="put-box">
            {
              type === 'classify' ?
                <NavLink to='/find'>
                  <input 
                    type="text" 
                    placeholder={putText} 
                    onChange={(e) => onChange(e)} 
                  />
                </NavLink>
                :
                <div className='box'>
                  <input type="text" placeholder={putText} ref="findPut" />
                  <div 
                    className='find-box'
                    onClick={this.findLately}
                  >
                    <img src={findUrl} alt=""/>
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Index

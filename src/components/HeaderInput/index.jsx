import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './styles.less'

export default class Index extends Component {

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

  render() {
    const { putText, imgUrl, type, findUrl } = this.state
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
                  <input type="text" placeholder={putText} />
                </NavLink>
                :
                <div className='box'>
                  <input type="text" placeholder={putText} />
                  <div className='find-box'>
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

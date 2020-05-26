import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './styles.less'

export default class Index extends Component {

  state = {
    putText: '', //输入框placeholder
    imgUrl: '', //图片地址
    type: ''
  }

  componentDidMount() {
    const { putText, imgUrl, type } = this.props
    this.setState({ putText, imgUrl, type })
  }

  render() {
    const { putText, imgUrl, type } = this.state
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
                <input type="text" placeholder={putText} />
            }
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
<<<<<<< HEAD
import { NavLink } from 'react-router-dom'
=======
>>>>>>> 9e07f34ec7d42f43cfe7a2fcd5b03e288a14edf3
import './styles.less'

export default class Index extends Component {

  state = {
    putText: '', //输入框placeholder
<<<<<<< HEAD
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
=======
    imgUrl: '' //图片地址
  }

  componentDidMount() {
    const { putText, imgUrl } = this.props
    this.setState({ putText, imgUrl })
  }

  render() {
    const { putText, imgUrl } = this.state
    return (
      <div className="common-headerinput">
        <div className="left">
          <div>
            <img src={imgUrl} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="put-box">
            <input type="text" placeholder={putText} />
>>>>>>> 9e07f34ec7d42f43cfe7a2fcd5b03e288a14edf3
          </div>
        </div>
      </div>
    )
  }
}

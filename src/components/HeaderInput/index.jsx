import React, { Component } from 'react'
import './styles.less'


export default class Index extends Component {

  state = {
    putText: '', //输入框placeholder
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
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
<<<<<<< HEAD
import { NavLink } from 'react-router-dom'
<<<<<<< HEAD
=======
>>>>>>> 9e07f34ec7d42f43cfe7a2fcd5b03e288a14edf3
=======
import { connect } from 'react-redux'
import { FindLately } from '@/actions/find'
>>>>>>> 762ac22a125213e101cb56441108f8b8d8d035fe
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
<<<<<<< HEAD
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
                  <input type="text" placeholder={putText} ref="findPut" />
                  <div 
                    className='find-box'
                    onClick={this.findLately}
                  >
                    <img src={findUrl} alt=""/>
                  </div>
                </div>
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

export default Index

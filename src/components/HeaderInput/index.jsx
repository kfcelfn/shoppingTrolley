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
  myInit = () => {
    const { onChange , gobackFun , findClik} = this.props
    const { pageName, img, putText, text  } = this.props.propertyObj
    if (pageName === 'classify') {
      const { goback } = img
      return (
        <>
          <div className="left">
            <div>
              <NavLink to='/'>
                <img src={goback} alt="" />
              </NavLink>
            </div>
          </div>
          <div className="right">
            <div className="put-box">
              <NavLink to='/find'>
                <input type="text" placeholder={putText} />
              </NavLink>
            </div>
          </div>
        </>
      )
    } else if (pageName === 'find') {
      const { closefind, findShop } = img
      return (
        <>
          <div className="left">
            <div>
              <NavLink to='/classify/shops/492'>
                <img src={closefind} alt="" />
              </NavLink>
            </div>
          </div>
          <div className="right">
            <div className="put-box">
              <input 
                className="find-Put" 
                type="text"
                placeholder={putText}
                ref="txt"
              />
            </div>
            <div className='btn-box'>
                <div  onClick={()=> onChange(this.refs.txt)}><img src={findShop} alt=""/></div>
            </div>
          </div>
        </>
      )
    } else if (pageName === 'searchs') {
      const { goback } = img
      const { filter } = text
      const putStyle = { background: '#eaeaea', border: '0.03rem solid #eaeaea' }
      return (
        <>
          <div className="left">
            <div onClick={gobackFun}> 
              <img src={goback} alt="" />
            </div>
          </div>
          <div 
            className="right" 
            style={pageName === 'searchs' ? {paddingRight: 0} : {}}
          >
            <div className="put-box">
              <input 
                onClick={findClik}
                type="text" 
                placeholder={putText} 
                style={pageName === 'searchs' ? putStyle : {}}
              />
            </div>
          </div>
          <div className="last-right">
            <span>{filter}</span>
          </div>
        </>
      )
    }
  }

  componentDidMount() {
    console.log(this.props)
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
    return (
      <div className="common-headerinput">
        {
          this.myInit()
        }
      </div>
    )
  }
}

export default Index
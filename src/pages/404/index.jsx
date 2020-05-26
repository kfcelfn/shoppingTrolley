import React, { Component } from 'react'
import './styles.less'

export default class Error extends Component {
  render() {
    return (
      <div className='page_error'>
          {/* {
          goodsData.map((item, index) => {
            let newArr = JSON.parse(JSON.stringify(item.items))
            let one = newArr.slice(0, 1)
            let two = newArr.slice(1, 3)
            let three = newArr.slice(0, 2)

            let bottom01 = newArr.slice(3)
            let bottom02 = newArr.slice(2)
            return (
              <div className='mainWrap'>
                <div className="pages_home_list" key={index}>
                  <h1>{item.title}</h1>
                  {
                    item.items.length == 7 ?
                    <div className='top'>
                      <div className='top-left'>
                        {one[0].title}
                      </div>
                      <div className='top-right'>
                        {
                          two.map((two, twoIndex) => {
                            return (
                              <p key={twoIndex}>{two.title}</p>
                            )
                          })
                        }
                      </div>
                    </div> :
                    <div className='top-1'>
                      <div className='top-left'>
                        {three[0].title}
                      </div>
                      <div className='top-right'>
                        {three[1].title}
                      </div>
                    </div>
                  }

                  {/* 底部 */}

                  {/* {
                    item.items.length == 7 ?
                    <div className='bottom'>
                      {
                        bottom01.map((v, i) => {
                          return (
                            <div key={i}>
                             <p>1</p>
                            </div>
                          )
                        })
                      }
                    </div> : 
                    <div className='bottom'>
                      {
                        bottom02.map((v, i) => {
                          return (
                            <div key={i}>
                              <p>1</p>
                            </div>
                          )
                        })
                      }
                    </div>
                  }
                </div>
              </div> */}
            {/* )
          })
        } */} */}
      </div>
    )
  }
}

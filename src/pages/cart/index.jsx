import React, { Component } from 'react'
import { Checkbox } from 'antd';
import { connect } from 'react-redux'
import { PubulicHeader  } from '@/router/assembly'
import { delAction  } from '@/actions/details'
import './styles.less'

export default @connect(state => {
    return {
        parameterData:state.details.parameterData,
    }
    },{
        delAction
    })
class Cart extends Component {
    state = {
      allCheck:true,
      radioCheck:true,
    }
    //全选
    AllCheck = () => {
      
      this.setState({
        allCheck:!this.state.allCheck,
        radioCheck:!this.state.allCheck
      })
      if(this.state.allCheck === true){
        this.setState({
          sum:0
        })
      }
      else{
        this.setState({
          sum:123
        })
      }
    }
    //删除
    onDel = (index) => {
        var newData=this.props.parameterData
        newData=newData.filter((v,i) => {
            return v.id != index
        })
        this.props.delAction(newData)
    }
    //input框数据
    inputVal = (e) => {
      console.log(e)
    }
    
    render() {
        const { parameterData } = this.props
        return (
            <div className='pages-cart'>
                <PubulicHeader  title='购物车' />
                <section className='section'>
                    {
                      parameterData.map((v,i) => {
                        return (
                          <div key={i} className='pages-section'>
                              <div className='pages-section-le'>
                                  <Checkbox className='pages-section-leInput' checked={this.state.radioCheck}/>
                              </div>
                              <div className='pages-section-img'>
                                  <div className='pages-section-imgData'>
                                      <img src={v.img}/>
                                      <p onClick={() => this.onDel(v.id)}>删除</p>
                                  </div>
                              </div>
                              <div className='pages-section-ri'>
                                  <p className='pages-section-riP1'>{v.name}</p>
                                  <p className='pages-section-riP2'>
                                      <span>颜色:{v.col}</span>
                                      <span className='pages-section-riP2Sp2'>尺寸:{v.siz}</span>
                                  </p>
                                  <div className='pages-section-riFoot'>
                                      <span className='pages-section-riFootSpan'>￥{v.price}</span>
                                      <div className='pages-section-butInt'>
                                          <button>+</button>
                                          <input type='text' value='1' onChange={this.inputVal}/>
                                          <button>-</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        )
                      })
                    }
                    
                </section>
                <footer className='footer'>
                    <div className='select-total'>
                        <div className='select-all'>
                            <Checkbox checked={this.state.allCheck} onClick={this.AllCheck}>全选</Checkbox>
                        </div>
                      <div className='total'>
                          <span>合计：</span>
                          <span className='color'>￥<i>{this.state.sum}</i></span>
                      </div>
                    </div>
                  
                  <div className='clearing'>
                      <span>去结算</span>
                  </div>
                </footer>
              </div>
          )
      }
  }

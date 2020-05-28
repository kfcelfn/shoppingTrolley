import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAction, detailsAction1, parameterAction  } from '@/actions/details'
import './style.css'


export default @connect(state => {
    return {
        addToCarData:state.details.addToCarData,
        data:state.details.data,
    }
    },{
        addAction,
        detailsAction1,
        parameterAction
    })
class index extends Component {
  state = {
    show:true,
    val:1,
    col:'',
    siz:'',
    // sum:'',
    colVid:'',
    sizVid:''
  }
  componentDidMount(){
      console.log(this.props)
    const gid=this.props.gid
    this.props.addAction(gid)
    this.props.detailsAction1()
  }
  //点击关闭遮罩层
  clone = () => {
    this.props.click()
  }
  //点击增加数量
  add = () => {
      this.setState({
        val:this.state.val+1
      })
//    //总价格   
//       this.setState({
//           sum:this.props.data.price*this.state.val+this.props.data.price
//       })
  }
  //点击减少数量
  less = () => {
      if(this.state.val>0){
        this.setState({
            val:this.state.val-1
        })
      }
      else{
        this.setState({
            val:0
        })
      }
  }
  //input框数据
  inputVal = (e) =>{
    console.log(e)
  }

  //颜色，尺寸
  fn = (xx) => {
      let color=[]
      let size=[]
      const listData=this.props.addToCarData.data
     listData.map(v=>{
         if(v.title==='颜色'){
            color=( v.values.filter(v=>{
                if(v.vid===xx){
                   return v
                }
             }))
         }
         else if(v.title==='尺寸'){
            size=( v.values.filter(v=>{
                if(v.vid===xx){
                   return v
                }
           }))
         }
     })
     color.map(v=>{
         this.setState({
            col:v.value,
            colVid:v.vid,
         })
     })
     size.map(v=>{
        this.setState({
            siz:v.value,
            sizVid:v.vid,
         })
     })
  }
  //点击确定按钮
  confirm = () =>{
    if(this.state.col===''){
        alert('请选择颜色')
    }
    else if(this.state.siz===''){
        alert('请选择尺寸')
    }
    else if(this.state.val===0){
        alert('请选择数量')
    }
    else{
        alert('成功添加到购物车')
        const parameter={
            val:this.state.val,
            col:this.state.col,
            siz:this.state.siz,
        }
        this.props.parameterAction(parameter)
    }
  }
  render() {
      const { data } = this.props.addToCarData
      const  newData  = this.props.data
      const { colVid, sizVid } = this.state
    return (
      <div className='pages-mask-layer'>
          <div id="volet_clos">
              <div id="volet">
                  <div className='pages-maskLayer-Specifications'>
                      <div className='maskLayer-Specifications-head'>
                          <div className='Specifications-head-img'>
                                <img src={newData.images[0]}></img>
                          </div>
                          <div className='Specifications-head-detailed'>
                              <p>{newData.title}</p>
                              <p className='head-detailed-p1'>
                                  <span className='detailed-p1-span1'>￥{newData.price}</span>
                                  <span className='detailed-p1-span2'>
                                      商品编码：{newData.freight}
                                  </span>
                              </p>
                          </div>
                      </div>
                      {
                        data !== undefined ? 
                        
                        data.map((v,i) => {
                            return (
                                <div className='maskLayer-Specifications-body' key={i}>
                                    <div className='Specifications-body-size' >
                                        <div className='Specifications-body-p1'>{v.title}</div>
                                        {
                                            v.values.map ((v,i) => {
                                                return (
                                                    <div className={`body-size-child ${colVid===v.vid || sizVid===v.vid?'on':''}`} key={i} onClick={()=>this.fn(v.vid)}>
                                                        <span>{v.value}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                        :null
                      }
                     
                      <div className='maskLayer-Specifications-foot'>
                          购买数量
                          <div className='Specifications-foot-comp'>
                              <button onClick={this.less}>-</button>
                              <input type='text' value={this.state.val} onChange={(e)=>this.inputVal(e)}/>
                              <button onClick={this.add}>+</button>
                          </div>
                      </div>
                      
                  </div>
                  <a  aria-hidden="true" className="fermer"  onClick={this.clone}>x</a>
                  <div className='pages-maskLayer-foot'>
                      <button onClick={this.confirm}>确定</button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

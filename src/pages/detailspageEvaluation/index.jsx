import React, { Component } from 'react'
import { connect } from 'react-redux'
import { commentAction1} from '@/actions/details'
import './style.css'

export default @connect(state => {
    return {
        commitData1: state.details.commitData
    }
    },{
        commentAction1
    })
    class index extends Component {
        componentDidMount(){
            this.props.commentAction1()
        }
        render() {
            const { commitData1 } = this.props
            return (
                <div className='pages-detailspageEvaluation'>
                    <div>
                        <p className='pages-detailspageEvaluation-listHead'>
                            商品评价（{commitData1!=='没有数据'?commitData1.length:0}）
                        </p>
                        {
                            commitData1.length ? commitData1 != '没有数据' ? 
                                commitData1.map((v,i) => {
                                    return (
                                        <div className='pages-detailspageEvaluation-list' key={i}>
                                            <p><img src={v.head}></img><span className='pages-detailspageEvaluation-listName'>
                                                     {v.nickname}
                                                </span>
                                            </p>
                                            <p className='pages-detailspageEvaluation-ddd'>
                                                  {v.content}
                                            </p>
                                            <p>{v.times}</p>
                                        </div>
                                    )
                                })
                            : <p className='Hint'>没有相关数据</p> : null
                        }
                        
                    </div>
                </div>
            )
        }
    }

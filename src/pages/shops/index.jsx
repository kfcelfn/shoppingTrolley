import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getShopData } from '@/actions/shops'
import './styles.less'

@connect(state => {
  return {
    shopData: state.shops.shopData
  }
}, {
  getShopData
})

class Index extends Component {

  state = {
    cid: null
  }

  componentDidMount() {
    const { cid } = this.props.match.params
    this.setState({
      cid
    }, () => {
      this.props.getShopData(cid)
    })
  }

  componentWillReceiveProps(nextProps) {
    const { cid } = nextProps.match.params
    if (cid !== this.state.cid) {
      this.setState({
        cid
      }, () => {
        this.props.getShopData(cid)
      })
    }
  }

  render() {
    const { shopData } = this.props
    return (
      <div className='pages-shops'>
        {
          shopData instanceof Array && shopData.length ?
            shopData.map(item => {
              return (
                <div className='shop-box' key={item.cid}>
                  <p className='top-title'>
                    {item.title}
                  </p>
                  <div className='end-box'>
                    {
                      item.goods ?
                      item.goods.map(childItem => {
                        return (
                          <dl key={childItem.gid}>
                            <dt>
                              <div className='img-box'>
                                <img src={childItem.image} alt="" />
                              </div>
                            </dt>
                            <dd>
                              <span>{childItem.title}</span>
                            </dd>
                          </dl>
                        )
                      }) : null
                    }
                  </div>
                </div>
              )
            }) : <p className='not-data'>没有数据</p>
        }
      </div>
    )
  }
}

export default Index

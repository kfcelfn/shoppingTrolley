import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';
import { connect } from 'react-redux'
import { detailsAction1 } from '@/actions/details'
import goback from '@/assets/goback.png'
import './styles.less'

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1838763_7ot685icidi.js',
}, {
    detailsAction1
});

export default @connect(state => {
    return {
        data: state.details.data
    }
})
class index extends Component {
    fn = () => {
        //  console.log(this.props)
         window.history.back('/home') }
    render() {
        const { data } = this.props
        return (
            <div className='components-detailHead'>
                <div className='components-detailHead-le'>
                    <div onClick={this.fn}><img src={goback}/></div>
                </div>
                <div className='components-detailHead-body'>
                    <NavLink exact to={`/details/${data.gid}`}>
                        <span className='components-detailHead-bodySpan'>商品</span>
                    </NavLink>
                    <NavLink exact to='/details/det'>
                        <span className='components-detailHead-bodySpan'>详情</span>
                    </NavLink>
                    <NavLink exact to='/details/evaluation'>
                        <span className='components-detailHead-bodySpan'>评价</span>
                    </NavLink>
                </div>
                <div className='components-detailHead-ri'>
                    <NavLink exact to='/cart' className='components-detailHead-bodySpan iconText'>
                        <IconFont type='icon-gouwuche' />
                    </NavLink>
                </div>
            </div>
        )
    }
}

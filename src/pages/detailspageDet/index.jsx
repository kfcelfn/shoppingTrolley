import React, { Component } from 'react'
import { connect } from 'react-redux'
import { detailsAction1 } from '@/actions/details'
import './style.css'

export default @connect(state => {
	return {
		data: state.details.data,
	}
}, {
	detailsAction1
})
class extends Component {
	componentDidMount() {
		this.props.detailsAction1()
	}
	
	render() {
		const { data } = this.props

		return (
			<div className='pages-detailspageDet'>
				<div className='pages-detailspageDet-body'>
					<p>
						{data.bodys}
					</p>
				</div>
			</div>
		)
	}
}

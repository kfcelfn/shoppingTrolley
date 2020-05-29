import React, { Component } from 'react'
import DetailHead from '../../components/detailHead'
import { DetailspageDet, DetailspageEvaluation, DetailspageShop } from '@/router/assembly'
import './style.css'
import { Switch, Route, Redirect } from 'react-router-dom'

export default class index extends Component {
  render() {
    return (
      <div className='components-details'>
        <DetailHead />
        <Switch>
          <Route path='/details/evaluation/shop/:gid' component={DetailspageEvaluation} />
          <Route path='/details/det' component={DetailspageDet} />
          <Route path='/details/evaluation' component={DetailspageEvaluation} />
          <Route path='/details/:gid' component={DetailspageShop} />
          <Redirect to='/details/shop' />
        </Switch>
      </div>
    )
  }
}

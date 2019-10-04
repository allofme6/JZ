import './utils/http'

import React, { Component } from 'react'

import {Route , Switch , Redirect} from 'react-router-dom'

import './assets/styles/reset.css'

// import Index from './pages/index/index/'
// import { ArticleDetail } from './pages/articleDetail/index'
import Index from './pages/index/index/Index';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/index" component={Index}></Route>
          {/* <Route path="/articleDetail" component={ArticleDetail}></Route> */}
          <Redirect from="/" to="/index" exact></Redirect>
        </Switch>
      </div>
    )
  }

  componentDidMount() {
    let url = '/ajax/movieOnInfoList?token='
    this.$get(url , {
      word: 'hahah'
    })
  }
}




import './utils/http'

import React, { Component } from 'react'

import {Route , Switch , Redirect} from 'react-router-dom'

import './assets/styles/reset.css'

// import Index from './pages/index/index/'
// import { ArticleDetail } from './pages/articleDetail/index'
import Index from './pages/index/index/Index';
import {Wallet} from './pages/index/profile/wallet/'
import {Draft} from './pages/index/profile/draft/'
import {ProfileTopic} from './pages/index/profile/profileTopic/'
import {Record} from './pages/index/profile/record/'
import {Collection} from './pages/index/profile/collection/'
import {Setup} from './pages/index/profile/setup/'
import {ProfilePublish} from './pages/index/profile/profilePublish/'
import {Message} from './pages/index/profile/message/'





export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/index" component={Index}></Route>
        <Route path="/wallet" component={Wallet}></Route>
        <Route path="/draft" component={Draft}></Route>
        <Route path="/topic" component={ProfileTopic}></Route>
        <Route path="/record" component={Record}></Route>
        <Route path="/collection" component={Collection}></Route>
        <Route path="/setup" component={Setup}></Route>
        <Route path="/profilepublish" component={ProfilePublish}></Route>
        <Route path="/message" component={Message}></Route>



        {/* <Route path="/articleDetail" component={ArticleDetail}></Route> */}
        <Redirect from="/" to="/index" exact></Redirect>
      </Switch>
    )
  }

  componentDidMount() {
    let url = '/ajax/movieOnInfoList?token='
    this.$get(url , {
      word: 'hahah'
    })
  }
}




import './utils/http'

import React, { Component } from 'react'

import {Route , Switch , Redirect} from 'react-router-dom'

import './assets/styles/reset.css'

// import Index from './pages/index/index/'
import {ArticleDetail}  from './pages/index/recommend/'
import {Publish}  from './pages/index/publish/'
import {Topic}  from './pages/index/topic/'
import {TopicSearch}  from './pages/index/topic/components/topicSearch/'
import Index from './pages/index/index/Index';
import {Wallet} from 'profileComponents/wallet/'
import {Draft} from 'profileComponents/draft/'
import {ProfileTopic} from 'profileComponents/profileTopic/'
import {Record} from 'profileComponents/record/'
import {Collection} from 'profileComponents/collection/'
import {Setup} from 'profileComponents/setup/'
import {ProfilePublish} from 'profileComponents/profilePublish/'
import {Message} from 'profileComponents/message/'




export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/index" component={Index}></Route>
        <Route path="/articleDetail" component={ArticleDetail}></Route>
        <Route path="/wallet" component={Wallet}></Route>
        <Route path="/draft" component={Draft}></Route>
        <Route path="/topic" component={ProfileTopic}></Route>
        <Route path="/record" component={Record}></Route>
        <Route path="/collection" component={Collection}></Route>
        <Route path="/setup" component={Setup}></Route>
        <Route path="/profilepublish" component={ProfilePublish}></Route>
        <Route path="/message" component={Message}></Route>
        <Route path="/publish" component={Publish}></Route>
        <Route path="/topicTalk" component={Topic}></Route>
        <Route path="/topicSearch" component={TopicSearch}></Route>



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




import './utils/http'

import React, { Component } from 'react'

import {Route , Switch , Redirect} from 'react-router-dom'

import './assets/styles/reset.css'

// import Index from './pages/index/index/'
import {ArticleDetail}  from './pages/index/recommend/'
import {Publish}  from './pages/index/publish/'
<<<<<<< HEAD
import {Topic}  from './pages/index/topic/'
import {TopicSearch}  from './pages/index/topic/components/topicSearch/'
=======
import {PublishMain} from 'publishComponents/publishMain/'
>>>>>>> master
import Index from './pages/index/index/Index';
import {Profile} from './pages/index/profile/'



export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/index" component={Index}></Route>
        <Route path="/articleDetail" component={ArticleDetail}></Route>
        <Route path="/publish" component={Publish}></Route>
<<<<<<< HEAD
        <Route path="/topicTalk" component={Topic}></Route>
        <Route path="/topicSearch" component={TopicSearch}></Route>
=======
        <Route path="/publishMain" component={PublishMain}></Route>
<<<<<<< HEAD
        
>>>>>>> master


=======
        <Route path="/profile" component={Profile}></Route>
>>>>>>> master

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




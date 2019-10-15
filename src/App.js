import './utils/http'

import React, { Component } from 'react'

import {Route , Switch , Redirect} from 'react-router-dom'

import './assets/styles/reset.css'
import './assets/styles/animated.css'

// import Index from './pages/index/index/'
import {ArticleDetail}  from './pages/index/recommend/'
import {ArticleCollects} from './pages/index/recommend/'
import {Publish}  from './pages/index/publish/'
import {PublishMain} from 'publishComponents/publishMain/'
import Index from './pages/index/index/Index';

import {Topic} from './pages/index/topic/';
import {TopicSearch} from './pages/index/topic/components/topicSearch/';
import {TopicDetail} from './pages/index/topic/components/topicDetail/';
import {JoinTalk} from './pages/index/topic/components/joinTalk/';


//登录注册
import {Register} from './pages/register/'
import {Login} from './pages/login/'
import { ForgetPassword } from './pages/forgetPassword/'

import {Profile} from './pages/index/profile/'



export default class App extends Component {
  render() {
    return (
      <Switch>

        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path='/forgetPassword' component={ForgetPassword}></Route>

        <Route path="/index" component={Index}></Route>
        <Route path="/articleDetail" component={ArticleDetail}></Route>
        <Route path="/articleCollect" component={ArticleCollects}></Route>
        <Route path="/publish" component={Publish}></Route>

        <Route path="/publishMain" component={PublishMain}></Route>


        <Route path="/topicTalk" component={Topic}></Route>
        <Route path="/topicSearch" component={TopicSearch}></Route>
        <Route path="/topicDetail" component={TopicDetail}></Route>
        <Route path="/joinTalk" component={JoinTalk}></Route>

        <Route path="/profile" component={Profile}></Route>


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




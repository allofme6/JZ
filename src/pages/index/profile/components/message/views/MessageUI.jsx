import React, { Component } from 'react'
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'

import {MessageContainer,NavBox} from '../StyledMessage'

import NavBar from 'components/navBar/NavBar'
import {Agree} from '../components/agree/'
import {Comment} from '../components/comment'

import tips from 'images/profile/tips.png';


class MessageUI extends Component {
    render() {
        return (
            <MessageContainer>
                <NavBar
                    titleText="消息列表"
                    aligns="center"
                    colors="#000"
                />
                <div className="navList">
                    <NavBox>
                        <span 
                            className={ this.props.location.pathname === "/message/agree" ? "agree active" : "agree" }
                            onClick = {()=>{this.props.handleClick('agree')}}
                        >
                            我收到的点赞
                            <img src={tips} alt=""/>
                        </span>
                        <span 
                            className={ this.props.location.pathname === "/message/comment" ? "comment active" : "comment" }
                            onClick = {()=>{this.props.handleClick('comment')}}
                        >
                            我收到的评论
                            <img src={tips} alt=""/>
                        </span>
                    </NavBox>
                </div>
                <Switch>
                    <Route path='/message/agree' component={Agree}></Route>
                    <Route path='/message/comment' component={Comment}></Route>
                    <Redirect from='/message' exact to="/message/comment"></Redirect>
                </Switch>
            </MessageContainer>
        ) 
    }
}

export default withRouter(MessageUI)
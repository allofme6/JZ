import React from 'react'
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'

import {MessageContainer,NavBox} from '../StyledMessage'

import NavBar from 'components/navBar/NavBar'
import {Agree} from '../components/agree/'
import {Comment} from '../components/comment'

import tips from 'images/profile/tips.png';


export default withRouter((props)=>{
    let path = props.match.url
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
                        className={ props.location.pathname === `${path}/agree` ? "agree active" : "agree" }
                        onClick = {()=>{props.handleClick('agree')}}
                    >
                        我收到的点赞
                        <img src={tips} alt=""/>
                    </span>
                    <span 
                        className={ props.location.pathname === `${path}/comment` ? "comment active" : "comment" }
                        onClick = {()=>{props.handleClick('comment')}}
                    >
                        我收到的评论
                        <img src={tips} alt=""/>
                    </span>
                </NavBox>
            </div>
            <Switch>
                <Route path={`${path}/agree`} component={Agree}></Route>
                <Route path={`${path}/comment`} component={Comment}></Route>
                <Redirect from={path} exact to={`${path}/agree`}></Redirect>
            </Switch>
        </MessageContainer>
    ) 
})

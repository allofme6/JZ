import React, { Component } from 'react'
import { ProfileContainer } from "../StyledProfile"

import back from 'images/back.png'
import msg from 'images/profile/msg.png'
import tips from 'images/profile/tips.png'
import wallet from 'images/profile/wallet.png'
import forward from 'images/profile/forward.png'
import topic from 'images/profile/topic.png'
import draft from 'images/profile/draft.png'
import record from 'images/profile/record.png'
import collection from 'images/profile/collection.png'
import setup from 'images/profile/setup.png'

import Card from '../components/card/Card'


class ProfileUI extends Component {
    render() {
        return (
            <ProfileContainer>
                <div className="card-container">
                    <div className="card-topBar">
                        <div className="card-back" onClick={()=>{this.props.handleClick('index')}}>
                            <img src={back} alt=""/>
                        </div>
                        <div className="card-msg" onClick={()=>{this.props.handleClick('message')}}>
                            <img src={msg} alt="" className="msg" />
                            <img src={tips} alt="" className="tips"/>
                        </div>
                    </div>
                    <Card className="card-img-box" top=".45rem" left="1.29rem" type="profilepublish" {...this.props}/>
                    <h4 onClick={()=>{this.props.handleClick('profilepublish')}}>可爱的小住户</h4>
                </div>
                <div className="profile-options">
                    <div className="profile-wallet profile-item" onClick={()=>{this.props.handleClick('wallet')}}>
                        <div className="profile-item-img">
                            <img src={wallet} alt=""/>
                        </div>
                        <div className="profile-item-title">钱包</div>
                        <div className="profile-forward">
                            <img src={forward} alt=""/>
                        </div>
                    </div>
                    <div className="profile-options-list">
                        <div className="profile-item" onClick={()=>{this.props.handleClick('topic')}}>
                            <div className="profile-item-img">
                                <img src={topic} alt=""/>
                            </div>
                            <div className="profile-item-title">我的讨论</div>
                            <div className="profile-forward">
                                <img src={forward} alt=""/>
                            </div>
                        </div>
                        <div className="profile-item" onClick={()=>{this.props.handleClick('draft')}}>
                            <div className="profile-item-img">
                                <img src={draft} alt=""/>
                            </div>
                            <div className="profile-item-title">草稿箱</div>
                            <div className="profile-forward">
                                <img src={forward} alt=""/>
                            </div>
                        </div>
                        <div className="profile-item" onClick={()=>{this.props.handleClick('record')}}>
                            <div className="profile-item-img" >
                                <img src={record} alt=""/>
                            </div>
                            <div className="profile-item-title">浏览记录</div>
                            <div className="profile-forward">
                                <img src={forward} alt=""/>
                            </div>
                        </div>
                        <div className="profile-item" onClick={()=>{this.props.handleClick('collection')}}>
                            <div className="profile-item-img">
                                <img src={collection} alt=""/>
                            </div>
                            <div className="profile-item-title">我的收藏</div>
                            <div className="profile-forward">
                                <img src={forward} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="profile-item profile-setUp" onClick={()=>{this.props.handleClick('setup')}}>
                        <div className="profile-item-img">
                            <img src={setup} alt=""/>
                        </div>
                        <div className="profile-item-title">设置</div>
                        <div className="profile-forward">
                            <img src={forward} alt=""/>
                        </div>
                    </div>
                </div>
            </ProfileContainer>
        );
    }
}

export default ProfileUI;
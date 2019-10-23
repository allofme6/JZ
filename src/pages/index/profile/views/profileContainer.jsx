import React, { Component } from 'react'
import ProfileUI from './ProfileUI'
import connect from '../store/connect'


import card from 'images/profile/cardImg.png'
@connect
class ProfileContainer extends Component {
    render() {
        console.log(this);
        return  <ProfileUI 
            handleClick={this.handleClick}
            cardImg={this.props.userMessage.cardImg}
            userName={this.props.userMessage.userName}
            ></ProfileUI>
    }
    handleClick = (type)=>{
        type === "index" ? this.props.history.push('/index') : this.props.history.push(`/profile/${type}`)
    }
}
export default ProfileContainer
import React, { Component } from 'react'
import ProfileUI from './ProfileUI'
import connect from '../store/connect'


import card from 'images/profile/cardImg.png'
@connect
class ProfileContainer extends Component {
    render() {
        return  <ProfileUI 
            handleClick={this.handleClick}
            cardImg={'http://10.9.24.153:8080' + this.props.userMessage.userID.iconUrl}
            userName={this.props.userMessage.userID.uname}
            ></ProfileUI>
    }
    handleClick = (type)=>{
        type === "index" ? this.props.history.push('/index') : this.props.history.push(`/profile/${type}`)
    }
    componentDidMount(){
       
    }
}
export default ProfileContainer
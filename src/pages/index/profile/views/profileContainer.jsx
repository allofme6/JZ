import React, { Component } from 'react'
import ProfileUI from './ProfileUI'
import connect from '../store/connect'


import card from 'images/profile/cardImg.png'
@connect
class ProfileContainer extends Component {
    state = {
        imgsrc:''
    }
    render() {
        return  <ProfileUI 
            handleClick={this.handleClick}
            cardImg={this.state.imgsrc}
            userName={this.props.userMessage.userID.uname}
            ></ProfileUI>
    }
    handleClick = (type)=>{
        type === "index" ? this.props.history.push('/index') : this.props.history.push(`/profile/${type}`)
    }
    componentDidMount(){
      let imgsrc= this.props.userMessage.userID.iconUrl
        this.setState({
            imgsrc: imgsrc.indexOf('base64') === -1 ? 'http://47.95.121.255:8080/'+imgsrc : imgsrc
        })
    }
}
export default ProfileContainer
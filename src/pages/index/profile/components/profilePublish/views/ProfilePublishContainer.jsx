import React, { Component } from 'react'

import ProfilePublish from './ProfilePublishUI'
import connect from 'profile/store/connect'

@connect
class ProfilePublishContainer extends Component {
    state = {
        imgsrc: ''
    }
    render() {
        return (
           <ProfilePublish 
                changeRoute={this.changeRoute} 
                cardImg={this.state.imgsrc}
                publishList = {this.props.profilePublishData}
                handleAction={this.handleAction}
            ></ProfilePublish>
        )
    }
    handleAction = (item)=>{
        this.props.history.push(`/articleDetail/${item.bolgId}`)
    }
    changeRoute = (type)=>{
        this.props.history.push(type)
    }
    async componentDidMount(){
        let imgsrc= this.props.userMessage.userID.iconUrl
        this.setState({
            imgsrc: imgsrc.indexOf('base64') === -1 ? 'http://47.95.121.255:8080/'+imgsrc : imgsrc
        })
        this.props.loadPublish(this.props.userMessage.userID.uId )
    }
}

export default ProfilePublishContainer
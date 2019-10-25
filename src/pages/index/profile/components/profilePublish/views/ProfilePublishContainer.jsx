import React, { Component } from 'react'

import ProfilePublish from './ProfilePublishUI'
import connect from 'profile/store/connect'

@connect
class ProfilePublishContainer extends Component {
    // state = {
    //     publishList: [] 
    // }
    render() {
        // console.log(this.props);
        return (
           <ProfilePublish 
                changeRoute={this.changeRoute} 
                cardImg={'http://10.9.24.153:8080'+this.props.userMessage.userID.iconUrl}
                publishList = {this.props.profilePublishData}
            ></ProfilePublish>
        )
    }
    changeRoute = (type)=>{
        this.props.history.push(type)
    }
    async componentDidMount(){
            this.props.loadPublish(this.props.userMessage.userID.uId )
    }
}

export default ProfilePublishContainer
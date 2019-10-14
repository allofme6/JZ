import React, { Component } from 'react'

import ProfilePublish from './ProfilePublishUI'

class ProfilePublishContainer extends Component {
    render() {
        return (
           <ProfilePublish changeRoute={this.changeRoute}></ProfilePublish>
        )
    }
    changeRoute = (type)=>{
        this.props.history.push(type)
    }
}

export default ProfilePublishContainer
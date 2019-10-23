import React, { Component } from 'react'

import ProfilePublish from './ProfilePublishUI'
import connect from 'profile/store/connect'

@connect
class ProfilePublishContainer extends Component {
    state = {
        publishList: [] 
    }
    render() {
        return (
           <ProfilePublish 
                changeRoute={this.changeRoute} 
                cardImg={this.props.userMessage.cardImg}
                publishList = {this.state.publishList}
            ></ProfilePublish>
        )
    }
    changeRoute = (type)=>{
        this.props.history.push(type)
    }
    async componentDidMount(){
        console.log(this.props)
        if(this.props.ProfilePublishData === {}){
            let res = await this.props.loadPublish()
            this.setState({
                publishList: res
            })
        }
    }
}

export default ProfilePublishContainer
import React, { Component } from 'react'
import ProfileTopicUI from './ProfileTopicUI'
import connect from 'profile/store/connect'

@connect
class ProfileTopicContainer extends Component {
    state = {
        topicList: []
    }

    render() {
        return (
            <ProfileTopicUI topicList={ this.state.topicList}/>
        )
    }
    
    async componentDidMount(){
        // 我的讨论
        let res = (await this.$get({
            url:'/api/getAnswertopics',
            params:{
                uid: this.props.userMessage.userID.uId  // 用户id
            }
        })).data
        console.log(res)
        this.setState({
            topicList: res.data
        })

    }
    handleAction = ()=>{
        this.history.push('/topicDetail')
    }
}

export default ProfileTopicContainer
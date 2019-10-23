import React, { Component } from 'react'
import ProfileTopicUI from './ProfileTopicUI'


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
        let res = await this.$get({
            url:'/api/getAnswertopics',
            params:{
                uid: ''  // 用户id
            }
        })
        this.setState({
            topicList: res.data
        })

    }
}

export default ProfileTopicContainer
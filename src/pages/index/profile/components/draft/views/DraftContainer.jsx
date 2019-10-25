import React, { Component } from 'react'

import DraftUI from './DraftUI'
import connect from 'profile/store/connect'

@connect
class DraftContainer extends Component {
    state = {
        draftList: []
    }
    render() {
        console.log(this.props);
        return <DraftUI
            draftList= {this.state.draftList}
        ></DraftUI>
    }
    async componentDidMount(){
        // if(this.props.ProfilePublishData === {}){
        //     let res = await this.props.loadPublish()
        //     this.setState({
        //         draftList: res
        //     })
        // }
        let res = (await this.$get({
            url:'/api/findbyuid',
            params:{
                uId: this.props.userMessage.userID.uId,
                blogState:1
            }
        })).data
        console.log(res);
    }
}

export default DraftContainer
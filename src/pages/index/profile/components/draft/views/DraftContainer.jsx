import React, { Component } from 'react'

import DraftUI from './DraftUI'
import connect from 'profile/store/connect'

@connect
class DraftContainer extends Component {
    state = {
        draftList: []
    }
    render() {
        return <DraftUI
            draftList= {this.state.draftList}
        ></DraftUI>
    }
    async componentDidMount(){
        if(this.props.ProfilePublishData === {}){
            let res = await this.props.loadPublish()
            this.setState({
                draftList: res
            })
        }
    }
}

export default DraftContainer
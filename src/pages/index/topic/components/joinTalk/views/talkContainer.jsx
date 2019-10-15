import React, { Component } from 'react'

import TalkUI from './TalkUI'
export default class talkContainer extends Component {
    render() {
        return <TalkUI
            onBackClick={this.backClick}
            ></TalkUI>           
    }

    backClick = ()=>{
        this.props.history.go(-1)
    }
}
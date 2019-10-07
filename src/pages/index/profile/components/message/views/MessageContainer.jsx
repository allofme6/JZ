import React, { Component } from 'react'

import MessageUI from './MessageUI'

class MessageContainer extends Component {
    render() {
        return <MessageUI handleClick={this.handleClick}></MessageUI>
    }
    handleClick = (type)=>{
        this.props.history.push(`/message/${type}`)
    }
}

export default MessageContainer
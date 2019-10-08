import React, { Component } from 'react'

import {AgreeContainer} from '../StyledAgree'
// import MessageItem from 'components/messageItem/MessageItem'
import EmptyTip from 'components/emptyTip/EmptyTip'

class AgreeUI extends Component {
    render() {
        return (
            <AgreeContainer>
                {/* <div className="message-list">
                    <MessageItem
                        msgTitle="萌萌的小住户赞了您发布的文章"
                    ></MessageItem>
                    <MessageItem
                        msgTitle="萌萌的小住户赞了您讨论的话题"
                    ></MessageItem>
                </div> */}
                <EmptyTip 
                    bearPosition="top: 1.12rem;"
                    tipPosition="top: 2.65rem;"
                    tipTitle="您还没有收到消息"
                />
            </AgreeContainer>
        )
    }
}

export default AgreeUI
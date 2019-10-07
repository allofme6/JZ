import React, { Component } from 'react';

import {CommentContainer} from '../StyledComment'
// import EmptyTip from 'components/emptyTip/EmptyTip'
import MessageItem from 'components/messageItem/MessageItem'


class CommentUI extends Component {
    render() {
        return (
            <CommentContainer>
                {/* <EmptyTip 
                    bearPosition="top: 1.12rem; left: 1.04rem;"
                    tipPosition="top: 2.65rem;"
                    tipTitle="您还没有收到消息"
                /> */}
                <div className="message-list">
                    <MessageItem
                        msgTitle="萌萌的小住户赞了您发布的文章"
                        msgText="学到了好多东西呀！"
                    ></MessageItem>
                    <MessageItem
                        msgTitle="萌萌的小住户赞了您讨论的话题"
                        msgText="学到了好多东西呀！"
                    ></MessageItem>
                </div>
            </CommentContainer>
        );
    }
}

export default CommentUI;
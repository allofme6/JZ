import React, { Component } from 'react';

import {MessageContainer} from './StyledMessageItem';

import cardImg from 'images/profile/msgCardImg.png';
import msgImg from 'images/profile/smallMsg.png';

class MessageItem extends Component {
    render() {
        return (
            <MessageContainer {...this.props} >
                <div className="msg-card-img">
                    <img src={cardImg} alt=""/>
                </div>
                <div className="content">
                    {this.props.msgTitle}
                    {
                        this.props.msgText &&
                        <div className="msg-text">
                            <div className="mes-text-img">
                                <img src={msgImg} alt=""/>
                            </div>
                            <div className="msg-text-main">
                                {this.props.msgText}
                            </div>
                        </div>
                    }
                </div>
            </MessageContainer>
        );
    }
}

export default MessageItem;
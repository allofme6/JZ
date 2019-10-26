import React, { Component } from 'react'

import {EmptyTipContainer} from './StyledEmptyTip'

import bear from 'images/profile/bear.png'
import forward from 'images/profile/emptyForward.png'


class EmptyTip extends Component {
    render() {
        return (
            <EmptyTipContainer 
                {...this.props}
            >
                <div className="bear">
                    <img src={bear} alt=""/>
                </div>
                <div className="empty-tips">{this.props.tipTitle}</div>
                {  this.props.actionTitle && 
                    <div className="actions" onClick={this.props.handleChange}>
                        {this.props.actionTitle}
                        <img src={forward} alt=""/>
                    </div>
                }
            </EmptyTipContainer>
        )
    }
}

export default EmptyTip
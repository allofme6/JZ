import React, { Component } from 'react'

import {ItemContainer} from './StyledProfileItem'


class ProfileItem extends Component {
    render() {
        return (
            <ItemContainer onClick={()=>{this.props.handleAction &&  this.props.handleAction(this.props.item) }}>
                <div className="item-box">
                    <div className="item-content">
                        {this.props.item.content}
                    </div>
                    <div className="item-img">
                        <img src={'http://47.95.121.255:8080/' + (this.props.item.answerimage || this.props.item.imageUrl )} alt=""/>
                    </div>
                </div>
            </ItemContainer>
        )
    }
}

export default ProfileItem
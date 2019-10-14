import React, { Component } from 'react';

import {SetContainer,ItemWrapper} from './StyledSetItem'

import forward from 'images/profile/forward13.png'

class SetItem extends Component {
    render() {
        return (
            <SetContainer onClick={this.props.handleActions}>
                <ItemWrapper>
                    <div className="text">
                        {this.props.title}
                    </div>
                    <div className="middle">
                        {this.props.children}
                    </div>
                    <div className="forward">
                        <img src={forward} alt=""/>
                    </div>
                </ItemWrapper>
            </SetContainer>
        );
    }
}

export default SetItem;
import React, { Component } from 'react';

import {SetupContainer} from '../StyeldSetup';
import NavBar from 'components/navBar/NavBar';
import SetItem from 'components/setItem/SetItem';
class SetupUI extends Component {
    render() {
        return (
            <SetupContainer>
                <NavBar
                    titleText="设置"
                    aligns="left"
                    colors="#000"
                ></NavBar>
                <div className="setup-list">
                    <SetItem
                        title="编辑个人资料"
                        handleActions={this.props.handleActions('presonal')}
                    >
                    </SetItem>
                    <SetItem
                        title="账号与安全"
                        handleActions={this.props.handleActions('accesssecurity')}
                    />
                </div>
            </SetupContainer>
        );
    }
}

export default SetupUI;
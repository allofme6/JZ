import React, { Component } from 'react';

import {PresonalContainer} from  '../StyledPresonal'

import NavBar from 'components/navBar/NavBar'
import SetItem from 'components/setItem/SetItem'

class PresonalUI extends Component {
    render() {
        return (
            <PresonalContainer>
                <NavBar
                    titleText="编辑个人资料"
                    colors ="#000"
                    algins = "left"
                    isBack ="true"
                />
                <div className="options-list">
                    <SetItem
                        title="头像"
                    />
                    <SetItem
                        title="昵称"
                    />
                    <SetItem
                        title="性别"
                    />
                    <SetItem
                        title="位置"
                    />
                    <SetItem
                        title="生日"
                    />
                    <SetItem
                        title="个人简介"
                    />
                </div>
            </PresonalContainer>
        );
    }
}

export default PresonalUI;
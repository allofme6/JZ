import React from 'react';

import {IntroContainer} from './StyleIntro';
import NavBar from 'components/navBar/NavBar';


export default (props)=>{
    return (
        <IntroContainer>
            <NavBar
                titleText="个人简介"
                colors = '#000'
                isBack ="true"
                rightAction = {props.rightAction}
            >
                保存
            </NavBar>
            <div className="intro-content">
                <input placeholder="介绍一下自己吧" type="text" onChange={(e)=>{props.getValue(e.target.value)}}/>
            </div>
        </IntroContainer>
    )
}

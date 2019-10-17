import React from 'react';

import {
    GlobalStyle , 
    PresonalContainer 
} 
from  '../StyledPresonal'

import NavBar from 'components/navBar/NavBar'
import SetItem from 'components/setItem/SetItem'
import { Modal, Button, DatePicker} from 'antd-mobile';

const operation = Modal.operation;

export default (props)=>{
    let { handleClickSex , sex ,chooseBirthday , changeRoute} = props
    return (
        <PresonalContainer>
            <GlobalStyle />
            <NavBar
                titleText="编辑个人资料"
                colors ="#000"
                algins = "left"
                isBack ="true"
            />
            <div className="options-list">
                <SetItem
                    title="头像"
                    handleActions={props.handleAlbum}
                >
                    <div className="choose">请选择</div>
                </SetItem>
                <SetItem
                    title="昵称"
                    handleActions={() => {changeRoute('/profile/setup/nickname')}}
                >
                    <div className="choose">请选择</div>
                </SetItem>
                <SetItem
                    title={
                    <Button onClick={() => operation([
                        { text: '男', onPress: () => handleClickSex('男') },
                        { text: '女', onPress: () => handleClickSex('女') },
                        ])}
                    >
                        <span>性别</span>
                    </Button>}
                >
                    <div>{sex}</div>
                </SetItem>
                <SetItem
                    title="位置"
                />
                <SetItem
                    title={
                        <DatePicker
                            mode="date"
                            minDate={new Date(1900, 1, 1, 0, 0, 0)}
                            maxDate={new Date(Date.now())}
                            onChange={date => chooseBirthday(date)}
                        >
                            <div className="choose-date">生日</div>
                        </DatePicker>
                    }
                >
                    <div>请选择</div>
                </SetItem>
                <SetItem
                    title="个人简介"
                    handleActions={() => {changeRoute('/profile/setup/intro')}}
                >
                    <div className="choose">请选择</div>
                </SetItem>
            </div>
        </PresonalContainer>
    )
}

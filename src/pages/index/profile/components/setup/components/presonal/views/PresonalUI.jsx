import React, { Component } from 'react';

import {
    GlobalStyle , 
    PresonalContainer , 
    ChooseButton , 
    ChooseDate
} 
from  '../StyledPresonal'

import NavBar from 'components/navBar/NavBar'
import SetItem from 'components/setItem/SetItem'
import { Modal, Button, DatePicker} from 'antd-mobile';

const operation = Modal.operation;

class PresonalUI extends Component {
    render() {
        let { sex , handleClickSex , birthday , chooseBirthday , changeRoute} = this.props
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
                        title="性别"
                    >
                        <ChooseButton>
                            <Button onClick={() => operation([
                                { text: '男', onPress: () => handleClickSex('男') },
                                { text: '女', onPress: () => handleClickSex('女') },
                                ])}
                            >
                                {sex}
                            </Button>
                        </ChooseButton>
                    </SetItem>
                    <SetItem
                        title="位置"
                    />
                    <SetItem
                        title="生日"
                    >
                        <ChooseDate>
                            <DatePicker
                                mode="date"
                                minDate={new Date(1900, 1, 1, 0, 0, 0)}
                                maxDate={new Date(Date.now())}
                                onChange={date => chooseBirthday(date)}
                            >
                                <div className="choose-date">{birthday}</div>
                            </DatePicker>
                        </ChooseDate>
                    </SetItem>
                    <SetItem
                        title="个人简介"
                        handleActions={() => {changeRoute('/profile/setup/intro')}}
                    >
                        <div className="choose">请选择</div>
                    </SetItem>
                </div>
            </PresonalContainer>
        );
    }
}







export default PresonalUI;
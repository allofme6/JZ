import React from 'react'
import NavBar from 'components/navBar/NavBar'
import { List, TextareaItem } from 'antd-mobile'
import { IntroContainerStyle , TextareaStyle } from './IntroStyle'


export default (props) => {
    return (
        <IntroContainerStyle>
            <NavBar
                aligns="left"
                titleText="个人简介"
            />
            <TextareaStyle>
                <List renderHeader={() => 'Count'}>
                    <TextareaItem
                        rows={5}
                        count={100}
                    />
                </List>
            </TextareaStyle>
        </IntroContainerStyle>
    )
}
import React, { Component } from 'react'
// import IntroUi from './IntroUi'


import IntroUI from './IntroUI'
import {Toast} from 'antd-mobile'

export default class Intro extends Component {
    render() {
        return (
            <IntroUI
                rightAction={this.preservation}
                getValue={this.getValue}
            />
        )
    }
    preservation = ()=>{
        //Toast.success(content, duration, onClose, mask)
        Toast.success(
            "保存成功",
            3,
            ()=>{
                this.props.history.goBack()
            },
            true
            )
        console.log(this.state.value);
    }
    getValue = (value)=>{
        this.setState({
            value
        })
    }
}

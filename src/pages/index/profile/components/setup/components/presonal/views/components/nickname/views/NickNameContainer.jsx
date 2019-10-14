import React, { Component } from 'react'
import NickNameUi from './NIckNameUi'
import {Toast} from 'antd-mobile'

export default class NickNameContainer extends Component {
    state = {
        value: ''
    }
    render() {
        return <NickNameUi 
            rightAction={this.preservation}
            getValue={this.getValue}
        />
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

import React, { Component } from 'react'
// import IntroUi from './IntroUi'


import IntroUI from './IntroUI'
import {Toast} from 'antd-mobile'
import connect from 'profile/store/connect'

import store from 'store'

@connect
class Intro extends Component {
    state = {
        value : ''
    }
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
        this.$post('/api/user/updateself',{
            id: this.props.userMessage.userID.uId,
            self: this.state.value
        })
        let data = store.get('userMessage')
        data.userID.self = this.state.value
        store.set('userMessage',data)
        
    }
    getValue = (value)=>{
        this.setState({
            value
        })
    }
}


export default Intro
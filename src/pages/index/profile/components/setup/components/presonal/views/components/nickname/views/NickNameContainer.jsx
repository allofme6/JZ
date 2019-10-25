import React, { Component } from 'react'
import NickNameUi from './NIckNameUi'
import {Toast} from 'antd-mobile'

import connect from 'profile/store/connect'
import store from 'store'
@connect
class NickNameContainer extends Component {
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
        this.$post('/api/user/updateuname',{
            uname:this.state.value,
            id: this.props.userMessage.userID.uId
        })
       
        let data = store.get('userMessage')
        data.userID.uname = this.state.value
        store.set('userMessage',data)
    }
    getValue = (value)=>{
        this.setState({
            value
        })
    }
}

export default NickNameContainer
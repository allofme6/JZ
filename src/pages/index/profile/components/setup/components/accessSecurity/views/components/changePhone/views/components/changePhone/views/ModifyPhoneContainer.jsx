import React, { Component } from 'react'
import ModifyPhoneUi from './ModifyPhoneUi'


export default class ChangePhone extends Component {
    state = {
        phoneNumber: '1551882',
        remind: '获取验证码'
    }

    render() {
        return  <ModifyPhoneUi
                    phoneNumber={this.state.phoneNumber}
                    remind={this.state.remind}
                    changePhoneNumber={this.changePhoneNumber}
                />
    }

    changePhoneNumber = (e) => {
        if(e.target.value.length > 0) {
            this.setState({
                remind: '重新获取'
            })
        }
        if(!isNaN(Number(e.target.value))) {
            this.setState({
                phoneNumber: e.target.value
            })
        }
    }
}

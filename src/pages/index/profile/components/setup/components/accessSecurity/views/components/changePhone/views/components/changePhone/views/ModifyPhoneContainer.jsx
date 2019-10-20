import React, { Component } from 'react'
import ModifyPhoneUi from './ModifyPhoneUi'


export default class ChangePhone extends Component {
    state = {
        phoneNumber: '',
        remind: '获取验证码',
        sendMessage: 'false',
        verificationCode: '',
        loginButton: 'false'
    }

    render() {
        return  <ModifyPhoneUi
                    phoneNumber={this.state.phoneNumber}
                    remind={this.state.remind}
                    changePhoneNumber={this.changePhoneNumber}
                    sendMessage={this.state.sendMessage}
                    verificationCode={this.state.verificationCode}
                    changeCode={this.changeCode}
                    loginButton={this.state.loginButton}
                    getVerificationCode={this.getVerificationCode}
                />
    }

    changePhoneNumber = (e) => {
        let inputValue = e.target.value

        //虽然重置了输入state的状态，但是每次触发仍然会拿到第一位，当输入的值位数大于零并且不为字母时才能发送验证码
        if(inputValue.length > 0 && !isNaN(Number(inputValue))) {
            this.setState({
                sendMessage: 'true'
            })
        }else {
            this.setState({
                sendMessage: 'false'
            })
        }
        if(!isNaN(Number(inputValue))) {
            this.setState({
                phoneNumber: e.target.value
            }, () => {
                this.changeLoginButton()
            })
        }
        this.changeLoginButton()
    }

    changeLoginButton() {
        if(this.state.verificationCode.length === 6 && this.state.phoneNumber.length > 0) {
            this.setState({
                loginButton: 'true'
            })
        }else {
            this.setState({
                loginButton: 'false'
            })
        }
    }

    changeCode = (e) => {
        let inputValue = e.target.value
        this.setState({
            verificationCode: inputValue
        } , () => {
            this.changeLoginButton()        
        })
    }

    getVerificationCode = () => {
        let time = 60
        if(/^1[3456789]\d{9}$/.test(this.state.phoneNumber) && this.state.sendMessage === 'true') {
            this.setState({
                sendMessage: 'false'
            })
            this.setState({
                remind: time + '秒'
            }, () => {
                time--
            })
            let s1 = setInterval(() => {
                this.setState({
                    remind: time + '秒'
                }, () => {
                    time--
                    if(time < 0) {
                        this.setState({
                            remind: '获取验证码'
                        })
                        clearInterval(s1)
                    }
                })
            }, 1000)
        }
    } 
}

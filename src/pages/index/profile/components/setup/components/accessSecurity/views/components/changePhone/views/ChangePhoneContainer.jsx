import React, { Component } from 'react'
import ChangePhoneUi from './ChangePhoneUi'

export default class ChangePhone extends Component {
    state = {
        passWord: 123,
        promptInformation: {
            code: 1,
            message: '密码正确'
        }
    }

    render() {
        return  <ChangePhoneUi
                    promptInformation={this.state.promptInformation}
                    changePassWord={this.changePassWord}
                    passWord={this.state.passWord}
                    changeRoute={this.changeRoute.bind(this)}
                />
    }

    changePassWord = (e) => {
        this.setState({
            passWord: e.target.value
        })
    }

    changeRoute() {
        console.log(this)
        this.props.history.push('/profile/setup/changePhone')
    }

}

import React,{Component} from 'react'
import LoginUI from './LoginUI'
import {GlobalStyle} from 'components/styled/styledPublish'

import {withRouter} from 'react-router-dom'
import { Toast} from 'antd-mobile';


class Login extends Component{
    constructor(){
        super()
        this.timer=null
        this.state={
           username:'',
           password:''
        }
        this.staticState={
        }
    }
    render(){
        return (
            <>
                <GlobalStyle/>
                <LoginUI 
                    loginClick={this.loginClick}
                    registerClick={this.registerClick}
                    usernamer={this.state.username}
                    getUsername={this.getUsername}
                    testUsername={this.testUsername}
                    password={this.state.password}
                    getPassword={this.getPassword}
                    testPassword={this.testPassword}
                    match={this.props.match}
                    findPassword={this.findPassword}
                >
                </LoginUI>
            </>
            
        )
    }

    loginClick=()=>{
        console.log(this.props)
        this.props.history.push('login')
    }
    registerClick=()=>{
        console.log(this.props)
        this.props.history.push({pathname:'/register/'})
    }
    getUsername=(e)=>{
        console.log(e.target.value)
        this.setState({
            username:e.target.value
        })
    }
    getPassword=(e)=>{
        console.log(e.target.value)
        this.setState({
            password:e.target.value
        })
    }
    testUsername=()=>{
        console.log('test')
        if(!(/^1[3456789]\d{9}$/.test(this.state.username))){
            console.log(this.state.username)
            this.phoneToast()
        }
    }
    testPassword=()=>{
        if(!(/^[\w_-]{9,9}$/.test(this.state.password))){
           this.passwordToast()
        }
    }
    findPassword=()=>{
        console.log('find',this.props)
        this.props.history.push({pathname:'/forgetPassword'})
        
    }
    phoneToast(){
        Toast.info('账号格式错误')
    }
    passwordToast(){
        Toast.info('密码长度为9个字符')
    }
}
export default withRouter(Login)
import React,{Component} from 'react'
import LoginUI from './LoginUI'
import {GlobalStyle} from 'components/styled/styledPublish'

import {withRouter} from 'react-router-dom'
import { Toast} from 'antd-mobile'

import Http from 'utils/http'
import connect from './connect'

@connect
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
                    submit={this.submit}
                >
                </LoginUI>
            </>
            
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     this.props.initID('feng')
    //     // console.log(this.props)
    // }
    // componentDidUpdate(){
    //     // this.props.initID('feng')
    //     console.log(this.props)
    // }

    loginClick=()=>{
        console.log(this.props)
        this.props.history.push('login')
    }
    registerClick=()=>{
        console.log(this.props)
        this.props.history.push({pathname:'/register/'})
    }
    submit= async ()=>{
        if(this.state.username&&this.state.password){
            let method = ''
            if((/^1[3456789]\d{9}$/.test(this.state.username))){
                method = "phone"
            }else{
                method = 'email'
            }
            let result =await this.$post('/api/user/login',{
                method : this.state.username,
                password : this.state.password
            })
            if(result.code==='200'){
                Toast.info(result.msg,1)
                this.props.initID(result.userID)      //======>传ID
            }else if(result.code='500'){
                Toast.info(result.message,1)
            }
        }else{
            Toast.info('请完善登录信息',1)
        }
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
        if((!(/^1[3456789]\d{9}$/.test(this.state.username)))&&
        (!(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.state.phoneNumber))
        )){
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
        this.props.history.push({pathname:'/forgetPassword/'})
        
    }
    phoneToast(){
        Toast.info('账号格式错误')
    }
    passwordToast(){
        Toast.info('密码长度为9个字符')
    }
}
export default withRouter(Login)
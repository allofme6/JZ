import React,{Component} from 'react'
import RegisterUI from './RegisterUI'
import {GlobalStyle} from 'components/styled/styledPublish'

import {withRouter,Route} from 'react-router-dom'
import { Toast} from 'antd-mobile';

// import {Get, Post} from 'utils/https'


class Register extends Component{
    constructor(){
        super()
        this.timer=null
        this.state={
            count:60,
            testState:'send',
            phoneNumber:'',
            verificationCode:'',
            password:'',
            resultPhone:false,
            resultverificationCode:false,
            showPasswordInput:true,
            showPassword:false
        }
    }
    componentDidUpdate(){
        console.log(this.props)
    }
    render(){
        return (
            <>
                <GlobalStyle/>
                <RegisterUI 
                    loginClick={this.loginClick}
                    registerClick={this.registerClick}
                    sentToast = {this.sentToast}
                    count={this.state.count}
                    testState={this.state.testState}
                    match = {this.props.match} 
                    getPhoneNumber={this.getPhoneNumber}
                    phoneNumber={this.state.phoneNumber}
                    testPhoneNumber={this.testPhoneNumber}
                    verificationCode={this.state.verificationCode}
                    getverificationCode={this.getverificationCode}
                    testverificationCode={this.testverificationCode}
                    showPasswordInput={this.state.showPasswordInput}
                    password = {this.state.password}
                    getPassword = {this.getPassword}
                    testPassword = {this.testPassword}
                    changeShowpassword = {this.changeShowpassword}
                    showPassword={this.state.showPassword}
                    
                >
                    <Route path='/findPassword'></Route>
                </RegisterUI>
            </>
            
        )
    }
    loginClick=()=>{
        console.log(this.props)
        this.props.history.push({pathname:'/login/'})
    }
    registerClick=()=>{
        console.log(this.props)
        this.props.history.push({pathname:'/register/'})
    }

    //验证手机号
    testPhone(){

    }
    sentToast=()=> {
        console.log(this.state.resultPhone)
        if(this.state.resultPhone){
            Toast.info('已发送',3);
            this.setState({
                testState:'time'
            })
            this.timer = setInterval(()=>{
                this.setState({
                    count:this.state.count-1
                },()=>{
                    console.log(this.state.count)
                    if(this.state.count===0){
                        clearInterval(this.timer)
                        this.setState({
                            count:60,
                            testState:'resend'
                        })
                    }
                })
            },1000)
        }else{
            this.phoneToast()
        }
    }
    sentToast=async ()=> {
        console.log(this.state.resultPhone)
        if(this.state.resultPhone){
            let result = await
            Toast.info('已发送',3);
            this.setState({
                testState:'time'
            })
            this.timer = setInterval(()=>{
                this.setState({
                    count:this.state.count-1
                },()=>{
                    console.log(this.state.count)
                    if(this.state.count===0){
                        clearInterval(this.timer)
                        this.setState({
                            count:60,
                            testState:'resend'
                        })
                    }
                })
            },1000)
        }else{
            this.phoneToast()
        }
    }
    getPhoneNumber=(e)=>{
        console.log(e.target.value)
        this.setState({
            phoneNumber:e.target.value
        })
    }
    getverificationCode=(e)=>{
        console.log(e.target.value)
        this.setState({
            verificationCode:e.target.value
        })
    }
    getPassword=(e)=>{
        console.log(e.target.value)
        this.setState({
            password:e.target.value
        })
    }
    testPhoneNumber=()=>{
        console.log('test')
        if(!(
            (/^1[3456789]\d{9}$/.test(this.state.phoneNumber))
            ||(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.state.phoneNumber))
            )
            ){
            console.log(this.state.phoneNumber)
            this.setState({
                resultPhone:false
            })
            this.phoneToast()
        }
        else{
            this.setState({
                resultPhone:true
            })
        }
    }
    // testPhoneNumber= async ()=>{
    //     console.log('test')
    //     if(!(
    //         (/^1[3456789]\d{9}$/.test(this.state.phoneNumber))
    //         ||(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.state.phoneNumber))
    //         )
    //         ){
    //         console.log(this.state.phoneNumber)
    //         this.setState({
    //             resultPhone:false
    //         })
    //         this.phoneToast()
    //     }
    //     else{
    //         let result = await Post('http：//localhost/user/regist',{
    //             username:this.state.phoneNumber
    //         })
    //         if(result.code === '200'){
    //             this.setState({
    //                 resultPhone:true
    //             })
    //         }else{
    //             this.usernameToast()
    //         }
            
    //     }
    // }
    testverificationCode=()=>{
        if(this.state.resultverificationCode){
            this.setState({
                showPasswordInput : true
            })
        }
    }
    testPassword=()=>{
        if(!(/^[\w_-]{9,9}$/.test(this.state.password))){
           this.passwordToast()
        }
    }
    changeShowpassword=()=>{
        console.log('ps')
        this.setState({
            showPassword:!this.state.showPassword
        })
    }
    outTimeToast(){
        Toast.info('验证码已超时')
    }
    errToast(){
        Toast.info('验证码输入错误')
    }
    phoneToast(){
        Toast.info('账号格式错误')
        console.log(123)
    }
    passwordToast(){
        Toast.info('密码长度为9个字符')
    }
    usernameToast(){
        Toast.info('该用户名已注册')
    }
}
export default withRouter(Register)
import React,{Component} from 'react'
import RegisterUI from './RegisterUI'
import {GlobalStyle} from 'components/styled/styledPublish'

import {withRouter,Route} from 'react-router-dom'
import { Toast} from 'antd-mobile';

import Http from 'utils/http'


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
            showPasswordInput:false,
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
                    submit={this.submit}
                >
                    <Route path='/findPassword'></Route>
                </RegisterUI>
            </>
            
        )
    }
    loginClick=()=>{
        this.props.history.push({pathname:'/login/'})
    }
    registerClick=()=>{
        this.props.history.push({pathname:'/register/'})
    }
    submit=async ()=>{
        if(this.state.phoneNumber&&this.state.verificationCode&&this.state.password){
            let result =(await this.$post('/api/user/regist',{
                phone : this.state.phoneNumber,
                code  : this.state.verificationCode,
                password : this.state.password
            })).data
            if(result.code==='200'){
                Toast.info(result.msg,1)
            }else if(result.code='400'){
                Toast.info(result.msg,1)
            }else if(result.code==='401'){
                Toast.info(result.msg,1)
            }
        }else{
            Toast.info('请完善登录信息',1)
        }
    }

    sentToast=async ()=> {
        if(this.state.resultPhone){
            let result = (await this.$post('/api/user/sendMessage',{phone:this.state.phoneNumber})).data
            if(result.code=='200'){
                Toast.info('已发送',3);
                this.setState({
                    testState:'time',
                    showPasswordInput:true
                })
                this.timer = setInterval(()=>{
                    this.setState({
                        count:this.state.count-1
                    },()=>{
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
                Toast.info(result.msg,1)
            }
        }
    }
    getPhoneNumber=(e)=>{
        this.setState({
            phoneNumber:e.target.value
        })
    }
    getverificationCode=(e)=>{
        this.setState({
            verificationCode:e.target.value
        })
     }
    getPassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    testPhoneNumber=async ()=>{
        if(!(/^1[3456789]\d{9}$/.test(this.state.phoneNumber))){
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
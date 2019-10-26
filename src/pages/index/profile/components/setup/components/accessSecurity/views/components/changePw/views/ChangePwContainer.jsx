import React, { Component } from 'react';

import {Toast} from 'antd-mobile';
import ChangePwUI from './ChangePwUI';
import connect from 'profile/store/connect'

import store from 'store'

@connect
class ChangePwContainer extends Component {
    state = {
        newpwd :'',
        original: '',
        confirmpwd: '',
        isBtnClick: false
    }
    render() {
        return (
            <ChangePwUI 
                original={this.original}
                newpwd={this.newpwd}
                confirmpwd = {this.confirmpwd}
                handleSubmit = {this.handleSubmit}
                isBtnClick = {this.state.isBtnClick}
                // values = {{
                //     original: this.state.original,
                //     newpwd:  this.state.newpwd,
                //     confirmpwd: this.state.confirmpwd
                // }}
            />
        );
    }
    original = (e)=>{
        this.setState({
            original : e.target.value
        },()=>{
            this.isShowBtn()
        })
        
    }
    newpwd = (e)=>{
        this.setState({
            newpwd : e.target.value
        },()=>{
            this.isShowBtn()
        })
    }
    confirmpwd = (e)=>{
        this.setState({
            confirmpwd : e.target.value
        },()=>{
            this.isShowBtn()
        })
    }
    handleSubmit = async ()=>{
        if(this.state.isBtnClick){
            if(this.state.original === this.state.newpwd){
                Toast.fail("家装宝典：新旧密码不能相同",1,null,true)
            }else if(this.state.newpwd !== this.state.confirmpwd){
                // Toast.fail(content, duration, onClose, mask)
                Toast.fail("家装宝典：新密码不一致",1,null,true)
            }else if(this.state.original !== this.props.userMessage.userID.password){
                // 这里做提交请求
                Toast.fail("家装宝典：密码输入有误",1,null,true)
            }else{
                let res = await this.$post('/api/user/updatepassword' , {
                    id: this.props.userMessage.userID.uId,
                    newpass: this.state.newpwd,
                    oldpass: this.props.userMessage.userID.password
                })
                store.remove('userMessage')
                this.props.history.push('/login')
            }
            
        }
    }
    // clearPw = ()=>{
    //     this.setState({
    //         original: '',
    //         newpwd: '',
    //         confirmpwd: ''
    //     })
    // }
    isShowBtn = ()=>{
        if(
            (this.state.original.length === 9) 
            && (this.state.newpwd.length === 9)
            && (this.state.confirmpwd.length === 9)
            && (this.state.newpwd.length === this.state.confirmpwd.length)
        ){
            this.setState({isBtnClick: true})
        }else{
            this.setState && this.setState({isBtnClick: false})
        }
    }
}

export default ChangePwContainer;
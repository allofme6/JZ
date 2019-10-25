import React, { Component } from 'react';

import PresonalUI from './PresonalUI';

import connect from 'profile/store/connect'

import store from 'store'
import { isNumber } from 'is-what';
@connect
class PresonalContainer extends Component {
    state = {
        sex : '请选择',
        birthday: '请选择',
        imgsrc: '',
        userName:'',
        self:''
    }
    
    render() {
        console.log(this.props);
        return <PresonalUI 
            sex={this.state.sex} 
            handleClickSex={this.handleClickSex} 
            birthday={this.state.birthday}
            chooseBirthday={this.chooseBirthday}
            changeRoute={this.changeRoute}
            handlecamera={this.handlecamera}
            imgsrc={this.state.imgsrc}
            userName={this.state.userName}
            userSelf={this.state.self}
        />
    }
    changeBirthday = ()=>{
        let birthday = this.props.userMessage.userID.birthday
        
        if(!isNumber(birthday)){
            let birthdayList = birthday.split('-')
            if(birthdayList.length === 1){
                return birthday
            }else{
                return birthdayList[0] + '年' + birthdayList[1] + '月' + birthdayList[2] + '日'
            }
        }else{
            return '请选择'
        }
    }

    componentDidMount(){
        this.setState({
            imgsrc: this.props.userMessage.userID.iconUrl,
            userName: this.props.userMessage.userID.uname,
            sex: this.props.userMessage.userID.gender ? (this.props.userMessage.userID.gender === 0 ? "男" : "女"): "请选择",
            birthday: this.changeBirthday(),
            self: this.props.userMessage.userID.self || '请填写'
        })
    }

    handlecamera = async (e)=>{
        let formdata = new FormData()
        formdata.append('headimg',e.target.files[0])
        formdata.append('id',this.props.userMessage.userID.uId)

        let reader = new FileReader()
        reader.onload = ()=>{
            // 当 FileReader 读取文件时候，读取的结果会放在 FileReader.result 属性中

            this.setState({
                imgsrc: reader.result
            })
            // this.props.editCard(reader.result)
            let data = store.get('userMessage')
            data.userID.iconUrl = reader.result
            store.set('userMessage',data)
          };
        reader.readAsDataURL(e.target.files[0]);
        
        let res = await this.$get(
            {
                url: '/api/user/updateheadimg',
                method: 'POST',
                data: formdata
            }
        )
         
    }

    handleClickSex = (sex) => {
        this.setState({
            sex
        })
        this.$post('/api/user/updategender',{
            id: this.props.userMessage.userID.uId,
	        gender: sex === '男' ? 0 : 1
        })

        let data = store.get('userMessage')
        data.userID.gender = sex
        store.set('userMessage',data)
    }

    chooseBirthday = (time) => {
        let date = new Date(time)
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let birthday = `${year}年${month}月${day}日`
        this.setState({
            birthday
        })
        this.$post('/api/user/updatebirthday',{
            id:this.props.userMessage.userID.uId,
	        birthday: year+ '-' + month + '-' + day
        })
        let data = store.get('userMessage')
        data.userID.birthday = birthday
        store.set('userMessage',data)
    }

    changeRoute = (url) => {
        this.props.history.push(url)
    }
}

export default PresonalContainer
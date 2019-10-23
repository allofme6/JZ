import React, { Component } from 'react';

import PresonalUI from './PresonalUI';

import connect from 'profile/store/connect'

@connect
class PresonalContainer extends Component {
    state = {
        sex : '请选择',
        birthday: '请选择',
        imgsrc: ''
    }
    
    render() {
        return <PresonalUI 
            sex={this.state.sex} 
            handleClickSex={this.handleClickSex} 
            birthday={this.state.birthday}
            chooseBirthday={this.chooseBirthday}
            changeRoute={this.changeRoute}
            handlecamera={this.handlecamera}
            imgsrc={this.state.imgsrc}
        />
    }

    handlecamera = (e)=>{
        console.log(this);
        let formdata = new FormData()
        formdata.append('file',e.target.files[0])
        this.props.editCard(formdata)
        // this.$get(
        //     {
        //         url: '/api/user/updateheadimg',
        //         method: 'POST',
        //         data: formdata
        //     }
        // )
        // let reader = new FileReader()
        // reader.onload = ()=>{
        //     // 当 FileReader 读取文件时候，读取的结果会放在 FileReader.result 属性中

        //     this.setState({
        //         imgsrc: reader.result
        //     })
        //   };
        //   reader.readAsDataURL(e.target.files[0]);
    }


    handleClickSex = (sex) => {
        this.setState({
            sex
        })
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
    }

    changeRoute = (url) => {
        this.props.history.push(url)
    }
}

export default PresonalContainer
import React, { Component } from 'react';

import PresonalUI from './PresonalUI';

class PresonalContainer extends Component {
    state = {
        sex : '请选择',
        birthday: '请选择'
    }
    
    render() {
        return <PresonalUI 
            sex={this.state.sex} 
            handleClickSex={this.handleClickSex} 
            birthday={this.state.birthday}
            chooseBirthday={this.chooseBirthday}
            changeRoute={this.changeRoute}
            handleAlbum={this.handleAlbum}
        />
    }

    handleAlbum = ()=>{
        console.log(1);
        this.$wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'], // 原图和压缩图
            sourceType: ['album'], // 指定来源是album相册
            success: (res)=>{
                console.log(res)
            }
        })
    }

    async componentDidMount(){
        let ret = (await this.$get({
            url: 'https://luckych.club/jssdks',
            params:{
                url:'https://luckych.club'+this.props.match.path
            }
        })).data
        this.$wx.config({
            ...ret,
            jsApiList: ['chooseImage']
        })
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

export default PresonalContainer;
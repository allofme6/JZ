import React, { Component } from 'react';

import PresonalUI from './PresonalUI';

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
            // handleAlbum={this.handleAlbum}
            handlecamera={this.handlecamera}
            imgsrc={this.state.imgsrc}
        />
    }

    handlecamera = (e)=>{
        console.log(e.target.files[0]);
        let formdata = new FormData()
        
        this.$post({
            url:'',
            
        })
        let reader = new FileReader()
        reader.onload = ()=>{
            // 当 FileReader 读取文件时候，读取的结果会放在 FileReader.result 属性中

            this.setState({
                imgsrc: reader.result
            })
          };
          reader.readAsDataURL(e.target.files[0]);
    }

    // handleAlbum = ()=>{
    //     this.$wx.chooseImage({
    //         count: 1,
    //         sizeType: ['original', 'compressed'], // 原图和压缩图
    //         sourceType: ['album'], // 指定来源是album相册
    //         success: (res)=>{
    //             this.handleUploadImage(res.localIds[0]) 
    //         }
    //     })
    // }
    // handleUploadImage = (localId) =>{
    //     this.$wx.uploadImage({
    //         localId, // 需要上传的图片的本地ID，由chooseImage接口获得
    //         isShowProgressTips: 1, // 默认为1，显示进度提示
    //         success: (res)=> {
    //           let serverId = res.serverId; // 返回图片的服务器端ID
    //           this.handlDownLoad(serverId)
    //         }
    //       })
    // }
    // handlDownLoad = async (media_id)=>{
    //     let res = await this.$post(
    //         'https://luckych.club/upload',
    //         {media_id,access_token: this.access_token}
    //     )
    // }
    // async componentDidMount(){
    //     this.access_token = ''
    //     let ret = (await this.$get({
    //         url: 'https://luckych.club/jssdks',
    //         params:{
    //             url:'https://luckych.club'+this.props.match.path
    //         }
    //     })).data
    //     this.access_token = ret.access_token
    //     delete ret.access_token
    //     this.$wx.config({
    //         debug: true,
    //         ...ret,
    //         jsApiList: ['chooseImage','uploadImage']
    //     })
    // }

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
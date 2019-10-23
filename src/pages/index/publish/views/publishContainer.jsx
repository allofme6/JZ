import React, { Component } from 'react'
import PublishUi from './PublishUi'
import axios from 'axios'

export default class PublishContainer extends Component {
    state = {
        imgsrc: ''
    }

    render() {
        return  <PublishUi
                    onBack={this.close}
                    handlecamera={this.handlecamera}
                    imgsrc={this.state.imgsrc}
                />
    }

    close = () => {
        this.props.history.go(-1)
    }

    handlecamera = (e)=>{
        let file = e.target.files
        console.log(file)
        let formdata = new FormData()
        for(let i=0; i<file.length; i++) {
            formdata.append('file', file[i])
        }
        formdata.append('file', file)
        
        // this.$post('localhost' , {
        //     data: formdata,
        // })

        axios({
            method: 'post',
            url: 'localhost',
            // headers: {'Content-Type':'multipart/form-data'},
            data: formdata
        })
        let reader = new FileReader()
        reader.onload = ()=>{
            console.log(reader)
            // 当 FileReader 读取文件时候，读取的结果会放在 FileReader.result 属性中
            this.props.history.push({
                pathname: 'publishMain',
                query: {
                    img: reader.result
                }
            })
            // this.setState({
            //     imgsrc: reader.result
            // })
          }
          reader.readAsDataURL(e.target.files[0]);
    }
}

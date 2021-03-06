import React, { Component } from 'react'
import PublishUi from './PublishUi'

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
        let file = e.target.files[0]
        console.log(file)
        // let formdata = new FormData()
        // for(let i=0; i<file.length; i++) {
        //     formdata.append('file', file[i])
        // }
        // formdata.append('file', file)
        
        let reader = new FileReader()
        reader.onload = ()=>{
            console.log(reader)
            // 当 FileReader 读取文件时候，读取的结果会放在 FileReader.result 属性中
            this.props.history.push({
                pathname: 'publishMain',
                query: {
                    img: reader.result,
                    fromPage: 'publish',
                    // formdata: formdata
                    file: file
                }
            })
          }
          reader.readAsDataURL(e.target.files[0]);
    }
}

import React, { Component } from 'react'
import PublishMainUi from './PublishMainUi'
import axios from 'axios'

export default class PublishMain extends Component {
    state = {
        formdata: new FormData(),
        publishContent: 'asdf',
        files: [
            {
                url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
            }
        ]
    }

    render() {
        return  <PublishMainUi 
                    publishContent={this.state.publishContent}
                    files={this.state.files}
                    onChange={this.onChange}
                    chooseImg={this.chooseImg}
                    publish={this.publish}
                    textareaContent={this.textareaContent}
                    deleteImage={this.deleteImage}
                />
    }

    onChange = (files, type, index) => {
        console.log(files[0], type, index);
        this.setState({
            files,
        })
    }

    chooseImg = (e) => {
        let file = e.target.files[0]
        this.state.formdata.append('file', file)

        let reader = new FileReader()
        reader.onload = ()=>{
            // 当 FileReader 读取文件时候，读取的结果会放在 FileReader.result 属性中
            this.state.files.push({
                url: reader.result
            })
            this.setState({
                files: this.state.files
            })
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    publish = () => {
        this.state.formdata.append('content', this.state.publishContent)

        axios({
            method: 'post',
            url: 'localhost',
            data: this.state.formdata
        })
    }

    componentDidMount() {
        let url = this.props.location.query.img ? this.props.location.query.img : ''
        this.state.files.push({
            url
        })
        this.setState({
            files: this.state.files
        })
    }
    
    textareaContent = (e) => {
        this.setState({
            publishContent: e.target.value
        })
    }

    deleteImage = (index) => {
        this.state.files.splice(index, 1)
        this.setState({
            files: this.state.files
        })
    }
}

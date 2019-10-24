import React, { Component } from 'react'
import PublishMainUi from './PublishMainUi'
import axios from 'axios'

export default class PublishMain extends Component {

    state = {
        formdata: '',
        publishContent: '',
        files: [],
        title: '哈哈',
        fromPage: '',
        contentToast: false
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
                    title={this.state.title}
                    changeTitle={this.changeTitle}
                    fromPage={this.state.fromPage}
                    addDrafts={this.addDrafts}
                    contentToast={this.state.contentToast}
                />
    }

    changeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    onChange = (files, type, index) => {
        console.log(files[0], type, index);
        this.setState({
            files,
        })
    }

    chooseImg = (e) => {
        let file = e.target.files[0]
        this.state.fromPage === 'publish' ? this.state.formdata.append('file', file) : this.state.formdata.append('anImage', file)

        let reader = new FileReader()
        reader.onload = ()=>{
            console.log(reader.result)
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
        let url = this.state.fromPage === 'publish' ? '/api/addblog' : '/api/insertAnswer'
        let form = this.state.formdata
        form.append('content', this.state.publishContent)
        form.append('uid', 'uid')

        if(!this.state.publishContent) {
            this.setState({
                contentToast: true
            })
            setTimeout(() => {
                this.setState({
                    contentToast: false
                })
            }, 1000)
        }

        if(this.state.fromPage === 'publish') {
            form.append('title', this.state.title)
            form.append('blogstate', '1')
    
            form.append('pubdate', 'pubdata')
            form.append('editDate', 'editDate')
    
            axios({
                method: 'post',
                url: "/api/insertAnswer",
                data: form
            })
            .then(() => {
                console.log("发布讨论成功")
            })

        }else {
            form.append('tid', 'tid')
            if(this.state.files.length === 0) {
                form.append('anImage' , '')
            }

            axios({
                method: 'post',
                url,
                data: form
            })
        }
    }

    componentDidMount() {
        let url = this.props.location.query ? this.props.location.query.img : ''
        this.setState({
            fromPage: this.props.location.query ? this.props.location.query.fromPage : ''
        })
        this.setState({
            formdata: this.props.location.query ? this.props.location.query.formdata : new FormData()
        })
        this.setState({
            image: ''
        })
        
        if(url) {
            this.setState({
                files: [
                    ...this.state.files,
                    {url}
                ]},     
            )
        }
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

    addDrafts = () => {
        let form = this.state.formdata
        form.append('content', this.state.publishContent)
        form.append('blogstate', '0')
        form.append('uid', 'uid')
        form.append('tid', 'tid')

        form.append('pubdate', 'pubdata')
        form.append('editDate', 'editDate')

        let url = '/api/addblog'

        axios({
            method: 'post',
            url,
            data: form,
        })
    }
}

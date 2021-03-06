import React, { Component } from 'react'
import PublishMainUi from './PublishMainUi'
import axios from 'axios'
import connect from 'profile/store/connect'

import { Toast } from 'antd-mobile';

@connect
class PublishMain extends Component {

    state = {
        formdata: '',
        publishContent: '',
        files: [],
        title: '',
        fromPage: '',
        contentToast: false,
        file: '',
        item: '',
        tId: ''
    }

    render() {
        return  <PublishMainUi 
                    item={this.state.item}
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
        console.log(files[0], type, index)
        this.setState({
            files,
        })
    }

    chooseImg = (e) => {
        let file = e.target.files[0]
        this.setState({
            file: file
        })
        // if(this.state.fromPage === 'publish') {
        //     this.setState({
        //         file: file
        //     })
        // }else {
        //     this.setState({

        //     })
        // } ? this.state..append('file', file) : this.state.formdata.append('anImage', file)

        let reader = new FileReader()
        reader.onload = ()=>{
            // console.log(reader.result)
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
        // let form = this.state.formdata
        // form.append('content', this.state.publishContent)
        // form.append('uId', '1')

        if(!this.state.publishContent) { 
            this.setState({
                contentToast: true
            })
            setTimeout(() => {
                this.setState({
                    contentToast: false
                })
            }, 1000)
            return 
        }

        if(this.state.fromPage === 'publish') {
            let form = new FormData()
            form.append('file', this.state.file)
            form.append('content', this.state.publishContent)
            form.append('uId', '1')
            form.append('title', this.state.title)
            form.append('blogstate', '1')
            // form.append('cimage', '1')
            // form.append('reply', '1')
    
            // form.append('pubDate', '2019-02-03')
            // form.append('editDate', '2019-03-02')
    
            this.$get({
                url: '/ajax/movieOnInfoList?token='
            })

            axios({
                method: 'post',
                url,
                data: form
            })
            .then(() => {
                Toast.success('发布成功', 1);
            })

        }else {
            let form = new FormData()
            form.append('anImage', this.state.file)
            form.append('content', this.state.publishContent)
            form.append('uId', this.props.userMessage.userID.uId)
            form.append('tId', this.state.tId)

            if(this.state.files.length === 0) {
                form.append('anImage' , '')
            }


            axios({
                method: 'post',
                url,
                data: form
            })
            .then(() => {
                Toast.success('评论成功', 1);
                setTimeout(() => {
                    this.props.history.go(-1)
                }, 1000)
            })
        }
    }

    componentDidMount() {
        // let item = this.props.location.state === {} ? '' : this.props.location.state.item
        // this.setState({
        //     item
        // })
        this.state.tId = this.props.location.state ? this.props.location.state.tId : ''
        let url = this.props.location.query ? this.props.location.query.img : ''
        this.setState({
            fromPage: this.props.location.query ? this.props.location.query.fromPage : ''
        })
        // this.setState({
        //     formdata: this.props.location.query ? this.props.location.query.formdata : new FormData()
        // })
        this.setState({
            file: this.props.location.query ? this.props.location.query.file : ''
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
        let form = new FormData()
        form.append('file', this.state.file)
        form.append('content', this.state.publishContent)
        form.append('blogstate', '0')
        form.append('uId', this.props.userMessage.userID.uId)
        form.append('title', '1')   


        let url = '/api/addblog'

        axios({
            method: 'post',
            url,
            data: form,
        })
        .then(() => {
            Toast.success('存储成功', 1, () => {
                this.props.history.push('/profile/draft')
            })
        })
    }
}

export default PublishMain
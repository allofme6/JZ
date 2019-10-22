import React, { Component } from 'react'
import ProfileUI from './ProfileUI'
export default class profileContainer extends Component {
    render() {
        return  <ProfileUI handleClick={this.handleClick}></ProfileUI>
    }
    handleClick = (type)=>{
        type === "index" ? this.props.history.push('/index') : this.props.history.push(`/profile/${type}`)
    }
    componentDidMount(){
        // 这里做获取头像请求或者是个人信息请求
    }
}

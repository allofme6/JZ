import React, { Component } from 'react'

import DetailUI from './DetailUI'
export default class detailContainer extends Component {
    state = {
        classifyList:{
            "推荐" : ["你家做了哪些防盗措施", "买装修材料,你遇到过哪些坑", "随手拍拍我家" , "晒晒我家的拼色墙", "现代风格之家"],
            "晒晒我家" : [ "随手拍拍我家" , "晒晒我家的拼色墙"],
            "色彩搭配" : [ "色彩搭配"],
            "风格元素" : ["现代风格之家" , "寻找北欧之家"],
            "好物推荐" : ["我的618战利品", "精心商品爆料大会"],
            "家有萌宠" : ["喵星人嗑薄荷现场大曝光"],
            "探店"     : ["探店"],
        },
        curPath: ""
    }

    render() {
        return <DetailUI
            path={this.state.curPath}
            data={this.state.classifyList}
            onBackClick={this.backClick}
            onJoinClick={this.joinClick}
            ></DetailUI>           
    }

    async componentDidMount() {
        let path = this.props.location.pathname
        let nowPath = path.split("/")[2]
        // console.log(nowPath)
        this.setState({ 
            curPath: nowPath
        })

        let result = await this.$get({
          url: '/api/findTopicBytid',
          params: {
              tid: 1
          }
        })
        console.log(result)
    }
    

    backClick = ()=>{
        this.props.history.go(-1)
    }

    joinClick = (type=>{
        this.props.history.push(`/${type}`)
    })

}

import React, { Component } from 'react'

import TopicUI from './TopicUI'
export default class topicContainer extends Component {
    state = {
        classifyList:{
            // "推荐" :
            // "晒晒我家" : [ "随手拍拍我家" , "晒晒我家的拼色墙"],
            // "色彩搭配" : [ "色彩搭配"],
            // "风格元素" : ["现代风格之家" , "寻找北欧之家"],
            // "好物推荐" : ["我的618战利品", "精心商品爆料大会"],
            // "家有萌宠" : ["喵星人嗑薄荷现场大曝光"],
            // "探店"     : ["探店"],
        },
        defaultNav: "推荐",
        classify:{}
    }

    render() {
        return <TopicUI 
            data={this.state.classifyList}
            defaultNav ={this.state.defaultNav}
            onChangeClick={this.changeClick}
            onNavClick={this.handleClick}
            onBackClick={this.backClick}
            ></TopicUI>           
    }

    async componentDidMount() {
        // let result = await this.$get({
        //   url: '/api/findType',
        //   params: {
        //     type: "家具闭坑"
        //   }
        // })
        // console.log(result)
        // this.setState({
        //     classify: result.data
        // })

        let result = (await this.$get("/mock/classifyList.json"))
        let menu = result.data.classify
        let data = result.data.data
        console.log(menu, data)
        let a = menu.reduce((list, item, index)=>{
            list[item] = data.slice(5*index , 5*index+5)
            return list
        },{})
        this.setState({
            classifyList: a
        })
    
    }


    changeClick = ((type,value) => {
        console.log(value)
        this.props.history.push({
            pathname:`/${type}`,
            state: {
                word: value
            }
        })
    })

    handleClick = async (value) => {
        console.log(value)
        this.setState({
            defaultNav: value
        })
        let result = await this.$get({
            url: '/api/findType',
            params: {
              type: value
            }
        })
        console.log(result)
    }

    backClick = ()=>{
        this.props.history.go(-1)
    }
}

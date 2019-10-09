import React, { Component } from 'react'

import TopicUI from './TopicUI'
export default class topicContainer extends Component {
    state = {
        classifyList:{
            "推荐" : 1,
            "晒晒我家" : 2,
            "色彩搭配" : 3,
            "风格元素" : 4,
            "好物推荐" : 5,
            "家有萌宠" : 6,
            "探店"     : 7,
        },
        defaultNav: "推荐"
    }

    render() {
        return <TopicUI 
            data={this.state.classifyList}
            defaultNav ={this.state.defaultNav}
            onNavClick={this.handleClick}
            ></TopicUI>           
    }

    handleClick = (value => {
        this.setState({
            defaultNav: value
        })
    })
}

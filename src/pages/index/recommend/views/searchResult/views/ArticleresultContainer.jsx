import React, { Component } from 'react'

import ResultUI from './ArticleResultUI'
export default class ArticleresultContainer extends Component {
    state = {
        searchList:[
            { "title" : "装修时，你最庆幸的决定",
              "sketch": "“幸好坚持这么做了！”装修时做哪个决定让你有这样的想法？",
              "count" : "2100"
            },
            { "title" : "装修时，让你后悔遗憾的事",
              "sketch": "把自己吃的垫，变成住友们长的智吧，让世界，充..满…爱！",
              "count" : "20144"
            }
        ]
    }

    render() {
        return <ResultUI
            onBackClick={this.backClick}
            onJoinClick={this.joinClick}
            data={this.state.searchList}
            ></ResultUI>           
    }

    backClick = ()=>{
        this.props.history.go(-1)
    }

    joinClick = (type=>{
        this.props.history.push(`/${type}`)
    })
}
import React, { Component } from 'react'

import ResultUI from './ResultUI'
export default class resultContainer extends Component {
    state = {
        searchList:[
            { "name" : "装修时，你最庆幸的决定",
              "contents": "“幸好坚持这么做了！”装修时做哪个决定让你有这样的想法？",
              "favorites" : "2100",
              "tId" : "666"
            },
            { "name" : "装修时，让你后悔遗憾的事",
              "contents": "把自己吃的垫，变成住友们长的智吧，让世界，充..满…爱！",
              "favorites" : "20144",
              "tId" : "667"
            }
        ]
    }

    render() {
        return <ResultUI
            onBackClick={this.backClick}
            onJoinClick={this.joinClick}
            onChangeClick={this.changeClick}
            data={this.state.searchList}
            ></ResultUI>           
    }

    async componentDidMount() {
        // let topicWords = this.props.history.location.state.word
        // let result = await this.$get({
        //   url: '/api/findTopic',
        //   params: {
        //       topicWords
        //   }
        // })
        this.setState({

        })
        // console.log(result)
    
    }

    backClick = ()=>{
        this.props.history.go(-1)
    }

    joinClick = (type=>{
        this.props.history.push(`/${type}`)
    })

    changeClick = ((type,value) => {
        console.log(value)
        this.props.history.push({
            pathname:`/${type}`,
            state: {
                word: value
            }
        })
    })
}
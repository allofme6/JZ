import React, { Component } from 'react'

import DetailUI from './DetailUI'
export default class detailContainer extends Component {
    state = {
        classifyList:{ 
        },
        talkList:[]
    }

    render() {
        return <DetailUI
            path={this.state.curPath}
            data={this.state.classifyList}
            talkList={this.state.talkList}
            onBackClick={this.backClick}
            onJoinClick={this.joinClick}
            ></DetailUI>           
    }

    async componentDidMount() {
        // console.log(this.props.location.state.word)
        // let path = this.props.location.state.word
        let top = this.props.location.state.top
        // this.setState({ 
        //     classifyList: path
        // })

        let result = await this.$get({
          url: '/api/findTopicBytid',
          params: {
              tid: top
          }
        })

        this.setState({ 
           talkList: result.data.data.answertopics,
           classifyList: result.data.data.topic
        })
        console.log(result)
       
    }
    

    backClick = ()=>{
        this.props.history.go(-1)
    }

    joinClick = ((type,value) => {
       
        this.props.history.push({
            pathname:`/${type}`,
            state: {
                tId: value,
            }
        })
    })

}

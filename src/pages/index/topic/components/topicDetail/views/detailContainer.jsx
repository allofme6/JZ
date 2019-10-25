import React, { Component } from 'react'

import DetailUI from './DetailUI'
export default class detailContainer extends Component {
    state = {
        classifyList:{ 
        },
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
        console.log(this.props.location.state.word)
        let path = this.props.location.state.word
        this.setState({ 
            classifyList: path
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

    joinClick = ((type,value) => {
        console.log(value)
        this.props.history.push({
            pathname:`/${type}`,
            state: {
                tId: value,
                uId: 1
            }
        })
    })

}

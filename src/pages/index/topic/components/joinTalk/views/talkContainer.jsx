import React, { Component } from 'react'

import TalkUI from './TalkUI'
export default class talkContainer extends Component {
    render() {
        return <TalkUI
            onBackClick={this.backClick}
            onPublishClick={this.publishClick}
            ></TalkUI>           
    }

    // async componentDidMount() {
    //     let result = await this.$post(
    //       '/api/insertAnswer',
    //       {
    //           tid: 1,
    //           uid: 1,
    //           content: "是炒藕正",
    //           anImage: "..."
    //       }
    //     )
    //     console.log(result)
    // }

    backClick = ()=>{
        this.props.history.go(-1)
    }

    // publishClick = async()=>{
    //     let result = await this.$post(
    //         '/api/insertAnswer',
    //         {
    //             tid: 1,
    //             uid: 1,
    //             content: "是炒藕正",
    //             anImage: "..."
    //         }
    //     )
    //     console.log(result)
    // }
}
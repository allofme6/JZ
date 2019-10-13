import React, { Component } from 'react'

import DetailUI from './DetailUI'
export default class detailContainer extends Component {
    render() {
        return <DetailUI
            onBackClick={this.backClick}
            onJoinClick={this.joinClick}
            ></DetailUI>           
    }

    backClick = ()=>{
        this.props.history.go(-1)
    }

    joinClick = (type=>{
        this.props.history.push(`/${type}`)
    })
}

import React, { Component } from 'react'

import DetailUI from './DetailUI'
export default class detailContainer extends Component {
    render() {
        return <DetailUI
            onBackClick={this.backClick}
            ></DetailUI>           
    }

    backClick = ()=>{
        this.props.history.go(-1)
    }
}

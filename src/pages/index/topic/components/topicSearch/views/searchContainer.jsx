import React, { Component } from 'react'

import SearchUI from './SearchUI'
export default class searchContainer extends Component {
    render() {
        return <SearchUI
            onBackClick={this.backClick}
            onResultClick={this.resultClick}
            ></SearchUI>           
    }

    backClick = ()=>{
        this.props.history.go(-1)
    }

    resultClick = (type)=>{
        this.props.history.push(`/${type}`)
    }
}

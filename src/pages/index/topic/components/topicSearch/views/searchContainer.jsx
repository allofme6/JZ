import React, { Component } from 'react'

import SearchUI from './SearchUI'
export default class searchContainer extends Component {
    render() {
        return <SearchUI
            onBackClick={this.backClick}
            ></SearchUI>           
    }

    backClick = ()=>{
        this.props.history.go(-1)
    }
}

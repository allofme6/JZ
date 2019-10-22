import React, { Component } from 'react'

import {Get} from 'utils/http'
import ArticleSearchUI from './ArticleSearchUI'
export default class ArticleSearchContainer extends Component {
    render() {
        return <ArticleSearchUI
            onBackClick={this.backClick}
            onResultClick={this.resultClick}
            ></ArticleSearchUI>           
    }

    backClick = ()=>{
        this.props.history.go(-1)
    }

    resultClick = (type)=>{
        console.log(this.ref)
        this.props.history.push(`/${type}`)
    }
    componentDidMount(){

    }
}

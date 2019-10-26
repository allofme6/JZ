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

    resultClick = (type,keyWords)=>{
         if(keyWords){
            this.props.history.push({
                pathname:`/${type}`,
                state: {
                    word: `${keyWords}`
                }
            })
        }else{
            console.log("搜索内容不能为空")
        }
    }
    componentDidMount(){

    }

}

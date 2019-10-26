import React, { Component } from 'react'

import ArticleResultUI from './ArticleResultUI'
export default class ArticleresultContainer extends Component {
    state = {
        searchList:[],
        dataNull: "文章搜索结果为0，请换个词汇搜索！"
    }

    render() {
        return <ArticleResultUI
            onBackClick={this.backClick}
            onJoinClick={this.joinClick}
            onChangeClick={this.changeClick}
            data={this.state.searchList}
            dataNull={this.state.dataNull}
            ></ArticleResultUI>           
    }

    async componentDidMount() {
        let title = this.props.history.location.state.word
        console.log(title)
        let result = await this.$get({
          url: '/api/findAllblog',
          params: {
            uid: "1",
            title  
          }
        })
        this.setState({
            searchList: result.data.data
        })
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
                top: value.tId
            }
        })
    })
}
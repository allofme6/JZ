import React, { Component } from 'react'

import TopicUI from './TopicUI'
export default class topicContainer extends Component {
    state = {
        classifyList:{
        },
        defaultNav: "家电推荐",
        classify:{},
    }

    render() {
        return <TopicUI 
            data={this.state.classifyList}
            dataRight={this.state.classify}
            defaultNav ={this.state.defaultNav}
            onChangeSearchClick={this.searchClick}
            onChangeClick={this.changeClick}
            onNavClick={this.handleClick}
            onBackClick={this.backClick}
            ></TopicUI>           
    }

    async componentDidMount() {
        let result = await this.$get({
          url: '/api/findType',
        })
        console.log(result)
        this.setState({
            classifyList: result.data.data.types,
            classify: result.data.data.topics
        })

        // let result = (await this.$get("/mock/classifyList.json"))
        // let menu = result.data.classify
        // let data = result.data.data
        // let a = menu.reduce((list, item, index)=>{
        //     list[item] = data.slice(5*index , 5*index+5)
        //     return list
        // },{})
        // this.setState({
        //     classifyList: a
        // })
    
    }

    searchClick = (type => {
        this.props.history.push(`${type}`)
    })

    changeClick = ((type,value) => {
        console.log(value)
        this.props.history.push({
            pathname:`/${type}`,
            state: {
                top: value
            }
        })
    })

    handleClick = async (value) => {
        this.setState({
            defaultNav: value
        })

        let result = await this.$get({
            url: '/api/findAllByType',
            params: {
              type: value
            }
        })
        
        this.setState({
            classify: result.data.data
        })
    }

    backClick = ()=>{
        this.props.history.go(-1)
    }
}

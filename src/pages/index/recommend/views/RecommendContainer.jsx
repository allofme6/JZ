import React, { Component } from 'react'
import RecommendUi from './RecommendUi'
import connect from './connect'

class RecommendContainer extends Component {
    state={
        articleList:[]
    }
    render() {
        return (
            <RecommendUi 
            collectActive={this.props.collectActive}
            onClick={this.props.handleCollect} 
            onChangeClick={this.changeClick}
            articleList={this.state.articleList}
            >   
            </RecommendUi>
        )
    }
    changeClick = () => {
        this.props.history.push('/articleSearch')
    }
    async componentDidMount(){
        let result = await this.$get({
            url:"/api/findAllblog",
            params:{
              uid: "1"
            }
        })
        this.setState({
            articleList : result.data.data
        })
        
    }   
}

export default connect(RecommendContainer)
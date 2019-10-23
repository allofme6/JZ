import React, { Component } from 'react'
import RecommendUi from './RecommendUi'
import connect from './connect'

class RecommendContainer extends Component {
    render() {
        this.state={
            articleList:[]
        }
        return (
            <RecommendUi 
            collectActive={this.props.collectActive}
            onClick={this.props.handleCollect} 
            onChangeClick={this.changeClick}
            >   
            </RecommendUi>
        )
    }
    changeClick = () => {
        this.props.history.push('/articleSearch')
        // console.log(this.props.match.params.id)
       
    }
    async componentDidMount(){
        let result = await this.$get({
            url:"https://paas.allinmd.cn/modules/sps/eventMap/allinmdWapEventMap.json?_=1571797612740"
        })
        this.state.articleList=result.data.data
        console.log(result)
    }   
}

export default connect(RecommendContainer)
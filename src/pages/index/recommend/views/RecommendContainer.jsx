import React, { Component } from 'react'
import RecommendUi from './RecommendUi'
import connect from './connect'
class RecommendContainer extends Component {
    render() {
        return (
            <RecommendUi 
            collectActive={this.props.collectActive}
            onClick={this.props.handleCollect} 
            >   
            </RecommendUi>
        )
    }
}

export default connect(RecommendContainer)
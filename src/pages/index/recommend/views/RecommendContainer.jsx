import React, { Component } from 'react'
import RecommendUi from './RecommendUi'
import connect from './connect'
class RecommendContainer extends Component {
    // constructor(props) {
    //     super(props)
    //   }
    render() {
        return (
            <RecommendUi 
            collectActive={this.props.collectActive}
            onClick={this.props.handleCollect} 
            >   
            </RecommendUi>
        )
    }
    // componentDidMount(){
    //   console.log(this.props.collectActive)
    // }
}

export default connect(RecommendContainer)
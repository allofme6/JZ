import React, { Component } from 'react'
// import RecommendUi from './RecommendUi'
import connect from './connect'
class RecommendContainer extends Component {
    render() {
        return (
            <div>
                推荐
            </div>
        )
    }
    componentDidMount(){
        this.props.increment()
    }
}

export default connect(RecommendContainer)
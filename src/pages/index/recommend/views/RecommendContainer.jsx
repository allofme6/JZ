import React, { Component } from 'react'
import RecommendUi from './RecommendUi'
import connect from './connect'
class RecommendContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
          collectActive:false
        }
      }
    render() {
        return (
            <RecommendUi 
            collectActive={this.state.collectActive}
            onClick={this.handleCollect} 
            >   
            </RecommendUi>
        )
    }
    handleCollect =()=>{
        console.log(1)
        this.setState({
          collectActive: !this.state.collectActive
        })
      }
}

export default connect(RecommendContainer)
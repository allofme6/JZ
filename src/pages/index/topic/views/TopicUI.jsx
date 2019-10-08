import React , {Component} from 'react'
import {TopicContainer} from '../styledTopic'

class TopicUI extends Component {
    render(){
        return (
            <TopicContainer>
                <div className = "TopicSearch">
                    搜索
                </div>
            </TopicContainer>
        )
    }
}

export default TopicUI
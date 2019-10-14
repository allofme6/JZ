import React , {Component} from 'react'
import {TopicContainer} from '../styledTopic'

import search from 'images/topic/search.png'
import arrow from 'images/topic/arrow.png'
import imgNav from 'images/topic/imgNav.png'

class TopicUI extends Component {
    render(){
        return (
            <TopicContainer>
                <div className="topic-head">
                    <div className="nav-arrow"><img src={arrow} alt=""/></div>
                    <div className = "TopicSearch">
                        <img src={search} alt=""/>
                        <input type="text" placeholder="搜索话题" />
                    </div>
                </div>
                <div className="imgNav"><img src={imgNav} alt=""/></div>
                <div className="content">
                    <ul>
                        {
                            Object.keys(this.props.data).map((value,index) => {
                                return (
                                    <li 
                                        className={this.props.defaultNav === value ? 'active' : ''}
                                        key = {value}
                                        onClick={() => this.props.onNavClick(value)}
                                    >
                                        <i></i>
                                        <span>{value}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="content-right">
                        内容待定
                    </div>
                </div>
            </TopicContainer>
        )
    }
}

export default TopicUI
import React , {Component} from 'react'
import {TopicContainer} from '../styledTopic'

import search from 'images/topic/search.png'
import arrow from 'images/topic/arrow.png'
import imgNav from 'images/topic/imgNav.png'
import text from 'images/topic/text.png'

class TopicUI extends Component {
    render(){
        return (
            <TopicContainer>
                <div className="topic-head">
                    <div className="nav-arrow" onClick={this.props.onBackClick}>
                        <img src={arrow} alt=""/>
                    </div>
                    <div className = "TopicSearch" onClick={() => this.props.onChangeClick("topicSearch")}>
                        <img src={search} alt=""/>
                        <input type="text" placeholder="搜索话题" />
                    </div>
                </div>
                <div className="imgNav"><img src={imgNav} alt=""/></div>
                <div className="content">
                    <ul className="classify-nav">
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
                        <ul>
                            {
                               (this.props.data[this.props.defaultNav]).map((value,index) => {
                                    return (
                                        <li 
                                            key = {value}
                                            onClick={() => this.props.onChangeClick("topicDetail")}
                                        >
                                            <img src={text} alt=""/>
                                            <div className="content-texts">
                                                <p>{value}</p>
                                                <p>回答1122</p>
                                            </div>
                                        </li>
                                    )
                                })  
                            }
                        </ul>
                    </div>
                </div>
            </TopicContainer>
        )
    }
}

export default TopicUI
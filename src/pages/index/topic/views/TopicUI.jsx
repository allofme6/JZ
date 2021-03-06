import React , {Component} from 'react'
import {TopicContainer} from '../styledTopic'

import search from 'images/topic/search.png'
import arrow from 'images/topic/arrow.png'
import imgNav from 'images/topic/imgNav.png'
import text from 'images/topic/text.png'

class TopicUI extends Component {
    render(){
        // console.log(this.props.defaultNav)
        // console.log(this.props.data)
        return (
            <TopicContainer>
                <div className="topic-head">
                    <div className="nav-arrow" onClick={this.props.onBackClick}>
                        <img src={arrow} alt=""/>
                    </div>
                    <div className = "TopicSearch" onClick={() => this.props.onChangeSearchClick("topicSearch")}>
                        <img src={search} alt=""/>
                        <input type="text" placeholder="搜索话题" />
                    </div>
                </div>
                <div className="imgNav"><img src={imgNav} alt=""/></div>
                <div className="content">
                    <ul className="classify-nav">
                        <li className={this.props.defaultNav === "推荐" ? 'active' : ''}
                            onClick={this.props.onInitClick}
                        >
                            <i></i>
                            <span>推荐</span>    
                        </li>
                        {
    
                            Object.values(this.props.data).map((value,index) => {
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
                               Object.values(this.props.dataRight).map((value,index) => {
                                    return (
                                        <li 
                                            key = {index}
                                            onClick={() => this.props.onChangeClick(`topicDetail/${index}`,value.tId)}
                                        >
                                            <img src = {`/api/`+ value.tImage} alt=""/>
                                            <div className="content-texts">
                                                <p>{value.title}</p>
                                                <p>回答{value.answer}</p>
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
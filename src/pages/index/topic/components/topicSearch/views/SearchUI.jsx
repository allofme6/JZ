import React , {Component} from 'react'
import {SearchContainer} from '../styledSearch'

import search from 'images/topic/search.png'
import arrow from 'images/topic/arrow.png'
import keyword from 'images/topic/keyword.png'


class SearchUI extends Component {
    render(){
        return (
            <SearchContainer>
                <div className="topic-head">
                    <div className="nav-arrow" onClick={this.props.onBackClick}>
                        <img src={arrow} alt=""/>
                    </div>
                    <div className = "TopicSearch">
                        <img src={search} alt=""/>
                        <input type="text" placeholder="搜索话题" ref={input=> this.input=input} />
                    </div>
                    <div className="search-word" onClick={()=>this.props.onResultClick("searchResult" , this.input.value)}>搜索</div>
                </div>
            </SearchContainer>
        )
    }
}

export default SearchUI
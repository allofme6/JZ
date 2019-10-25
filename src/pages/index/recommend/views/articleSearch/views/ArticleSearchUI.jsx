import React , {Component} from 'react'
import {SearchContainer} from '../styledSearch'

import search from 'images/topic/search.png'
import arrow from 'images/topic/arrow.png'
import keyword from 'images/topic/keyword.png'


class ArticleSearchUI extends Component {
    render(){
        return (
            <SearchContainer>
                <div className="topic-head">
                    <div className="nav-arrow" onClick={this.props.onBackClick}>
                        <img src={arrow} alt=""/>
                    </div>
                    <div className = "TopicSearch">
                        <img src={search} alt=""/>
                        <input 
                            // ref="Dom" 
                            type="text" 
                            placeholder="花砖" 
                            // value={this.props.keyWord}
                            // onChange={this.props.changeKeyWord}
                        />
                    </div>
                    <div className="search-word" onClick={()=>this.props.onResultClick("searchResult")}>搜索</div>
                </div>
                <div className="keyword">
                    <img src={keyword} alt=""/>
                </div>
            </SearchContainer>
        )
    }
}

export default ArticleSearchUI
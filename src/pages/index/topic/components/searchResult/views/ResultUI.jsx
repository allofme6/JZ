import React , {Component} from 'react'
import {ResultContainer} from '../styledResult'

import arrow from 'images/topic/detailArrow.png'

class ResultUI extends Component {
    render(){
        return (
            <ResultContainer>
                <div className="result-head">
                   <div className="arrow" onClick={this.props.onBackClick}>
                       <img src={arrow} alt=""/>
                   </div>
                </div>
                <div className="instr-wrap">
                    <p className="instr">
                        装修名词听不懂.施工阶段不断返回.跟父母或爱人出现意见分歧
                    </p>
                </div>
                <div className="content">
                    <ul>
                        {   
                            this.props.data ? 
                            (this.props.data).map((value,index)=>{
                                return(
                                    <li key= {index}>
                                        <div className="title">话题</div>
                                        <h1 onClick={() => this.props.onChangeClick(`topicDetail/${index}`,value)}>{value.title}</h1>
                                        <div className="sketch">{value.contents}</div>
                                        <div className="count">{value.answer}人参与征集</div>
                                    </li>
                                )
                            }) 
                            : null  
                                
                        }
                    </ul>
                </div>
            
            </ResultContainer>
        )
    }
}

export default ResultUI
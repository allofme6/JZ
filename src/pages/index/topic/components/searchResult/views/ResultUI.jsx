import React , {Component} from 'react'
import {ResultContainer} from '../styledResult'

import arrow from 'images/topic/detailArrow.png'
import personImg from 'images/topic/detailPerson.png'
import contextImg1 from 'images/topic/contextImg1.png'
import contextImg2 from 'images/topic/contextImg2.png'
import add from 'images/topic/add.png'

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
                            (this.props.data).map((value,index)=>{
                                return(
                                    <li>
                                        <div className="title">话题</div>
                                        <h1>{value.title}</h1>
                                        <div className="sketch">{value.sketch}</div>
                                        <div className="count">{value.count}人参与征集</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            
            </ResultContainer>
        )
    }
}

export default ResultUI
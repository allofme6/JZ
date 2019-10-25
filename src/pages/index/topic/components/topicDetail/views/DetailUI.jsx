import React , {Component} from 'react'
import {DetailContainer} from '../styledDetail'

import arrow from 'images/topic/detailArrow.png'
import personImg from 'images/topic/detailPerson.png'
import contextImg1 from 'images/topic/contextImg1.png'
import contextImg2 from 'images/topic/contextImg2.png'
import add from 'images/topic/add.png'
import talkImg from 'images/topic/talkImg.png'

class DetailUI extends Component {
    render(){
        return (
            <DetailContainer>
                <div className="detail-head">
                   <img src={this.props.data.tImage ? `/api/`+ this.props.data.tImage : talkImg} alt="" className="head-img"/>
                   <div className="arrow" onClick={()=>this.props.onBackClick(this.props.data.tId)}>
                       <img src={arrow} alt=""/>
                   </div>
                   <div className="title">
                        <p>{this.props.data.title}</p>
                        <p>回答 {this.props.data.answer}</p>
                    </div>
                </div>
                <p className="instr">
                {this.props.data.contents}
                </p>
                <div className="space-line"></div>
                <div className="content">
                    <div className="talk">讨论</div>
                    {
                        Object.values(this.props.talkList).map((value, index) =>{
                            return(
                                <div className="item" key={index}>
                                    <div className="person">
                                        <div className="person-img">
                                            <img src={personImg} alt=""/>
                                        </div>
                                        <div className="person-message">
                                            <p>{value.users.uname}</p>
                                            <p>北京  昌平</p>
                                        </div>
                                    </div>
                                    <p className="context">
                                        {value.content}   
                                    </p>
                                    <div className="context-img">
                                        <img src={'/api/' + value.answerimage} alt=""/>
                                       
                                    </div>
                                </div>
                            )
                        })
                    
                    }
                    
                    <div className="join-review" onClick={()=>this.props.onJoinClick("publishMain",this.props.data.tId)}>
                        <img src={add} alt=""/>参与讨论
                    </div>
                </div>
            
            </DetailContainer>
        )
    }
}

export default DetailUI
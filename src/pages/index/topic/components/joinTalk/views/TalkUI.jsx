import React , {Component} from 'react'
import {JoinContainer} from '../styledTalk'

import arrow from 'images/topic/arrow.png'
import talkImg from 'images/topic/talkImg.png'
import talkFalse from 'images/topic/talkFalse.png'
import talkAdd from 'images/topic/talkAdd.png'

class TalkUI extends Component {
    render(){
        return (
            <JoinContainer>
                <div className="talk-head">
                    <div className="arrow" onClick={this.props.onBackClick}>
                       <img src={arrow} alt=""/>
                    </div>
                    <div className="talk-btn">
                         <span>存草稿</span>
                         <span>发布</span>
                    </div>
                </div>
                <div className="talk-content">
                    <textarea></textarea>
                    <div className="talk-img">
                        <span>
                            <img src={talkImg} alt=""/>
                            <div className="talkFalse">
                                <img src={talkFalse} alt=""/>
                            </div>
                        </span>
                        <span>
                            <img src={talkAdd} alt=""/>
                        </span>
                    </div>
                </div>
            
            </JoinContainer>
        )
    }
}

export default TalkUI
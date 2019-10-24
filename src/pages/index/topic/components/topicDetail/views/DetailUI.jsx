import React , {Component} from 'react'
import {DetailContainer} from '../styledDetail'

import arrow from 'images/topic/detailArrow.png'
import personImg from 'images/topic/detailPerson.png'
import contextImg1 from 'images/topic/contextImg1.png'
import contextImg2 from 'images/topic/contextImg2.png'
import add from 'images/topic/add.png'

class DetailUI extends Component {
    render(){
        return (
            <DetailContainer>
                <div className="detail-head">
                   <div className="arrow" onClick={this.props.onBackClick}>
                       <img src={arrow} alt=""/>
                   </div>
                   <div className="title">
                        <p>{(this.props.data["推荐"])[this.props.path]}</p>
                        <p>回答 33</p>
                    </div>
                </div>
                <p className="instr">
                    对付猖獗的小偷，你家做了哪些[防盗措施] ？成本多少，安装起来麻烦吗？也欢迎你的[防盗心得或被盗经历] ，帮大家及时排除安全隐患~ 
                </p>
                <div className="space-line"></div>
                <div className="content">
                    <div className="talk">讨论</div>
                    <div className="item">
                        <div className="person">
                            <div className="person-img">
                                <img src={personImg} alt=""/>
                            </div>
                            <div className="person-message">
                                <p>老着急</p>
                                <p>北京  昌平</p>
                            </div>
                        </div>
                        <p className="context">
                            同事家被盗，夜间技术开门入户，扫荡了玄关和客厅，
                            屋主睡着没发觉。年底了，警戒装置搞起来! 介绍下
                            我家的防护三重机关。第一关吵醒自己吓跑贼，小米
                            门窗感应器，设置凌晨至早七点，门打开则激活小米
                            网关大嗓门播放噪音。    
                        </p>
                        <div className="context-img">
                            <img src={contextImg1} alt=""/>
                            <img src={contextImg2} alt=""/>
                        </div>
                    </div>
                    <div className="join-review" onClick={()=>this.props.onJoinClick("publishTalk")}>
                        <img src={add} alt=""/>参与讨论
                    </div>
                </div>
            
            </DetailContainer>
        )
    }
}

export default DetailUI
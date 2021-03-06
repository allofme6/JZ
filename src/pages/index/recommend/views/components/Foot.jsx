import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'
import { Modal, Button } from 'antd-mobile'

import {
  FooterContainer,
  ChatContainer,
  DzContainer
} from '../detail/views/StyledArticleDetail'

import collect from 'images/collect.png'
import activecollect from 'images/activecollect.png'
import reward from 'assets/images/reward.png'

const prompt = Modal.prompt;
 class Foot extends Component {

  render() {
    return (
      <FooterContainer>
        <div className="left">
          {/* <div className="lcontext" >
            <i>&#xe600;</i>
            <span>说点什么</span>
          </div> */}
          <div className="authccc">
            <i>&#xe600;</i>
            <input
              className="lcontext"
              type="text" 
              placeholder="说点什么"
              value={this.props.comment}
              onChange={this.props.changeComment}
              onKeyPress={this.props.sendComment}
            />
          </div> 
        </div>
        <ChatContainer onClick={this.props.onClickUp}>&#xe51b;<span className="cnums">{this.props.replyblogList.length}</span></ChatContainer>
        <div><div className="cc" onClick={this.props.onClickCollectUp} >
          <img src={this.props.collectActive === true ?  activecollect : collect } alt="" onClick={this.props.handleCollect} />
          <span 
          onClick={this.props.handleCollect} 
          className={this.props.collectActive === true ? 'active' : ''}>{this.props.ArticleDetailList.collect}</span>
        </div></div>
        <div className="reward">
          <Button onClick={() => prompt('请输入打赏金额', '', [
            { text: '取消' },
            { text: '确定', onPress: value => this.props.isReward(value, this.props.ArticleDetailList.bolgId, this.props.ArticleDetailList.uId)},
          ], 'default', '10')}
          ><img 
          src={reward} 
          alt=""
        /></Button>
          
        </div>
        {/* <DzContainer 
          onClick={this.props.changeState} 
          className={this.props.color === true ? 'active' : ''}>&#xe601;
          <span 
            onClick={this.props.changeState} 
            className={this.props.color === true ? 'active' : ''} 
          >
            {this.props.ArticleDetailList.like}
          </span>
        </DzContainer> */}
      </FooterContainer>
    )
  }
  
  
}

export default withRouter(Foot)

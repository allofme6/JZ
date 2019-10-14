import React, { Component } from 'react'
import { Icon } from 'antd-mobile';
// import { CSSTransition } from 'react-transition-group'


import {
  CommentsContainer,
  DzCommentContainer,
  Border1Container,
  Border2Container,
  SendContainer
} from '../detail/views/StyledArticleDetail'
import { GlobalStyle } from 'components/styled/styledPublish.js'

import { withRouter } from 'react-router-dom'

import commentlogo from 'images/commentlogo.png'
class Comments extends Component {
  render() {
    return (
      <CommentsContainer display = {this.props.display}>
        <GlobalStyle/>
        <div className="title">
          <p className="comments">3条评论</p>
          <Icon type="cross" size="lg" color='#000000' onClick={this.props.onClick} />
        </div>

        <div className="commentfoot">
          <p className="commentl">全部评论</p>
          <div className="authcomment1">
            <DzCommentContainer 
              onClick={this.props.changeState} 
              className={this.props.color === true ? 'active' : ''}>
              <span 
                onClick={this.props.changeState} 
                className={this.props.color === true ? 'active' : ''}
              >3</span>&#xe601;
            </DzCommentContainer>
            <img className="ctouxiang" src={commentlogo} alt=""/>
            <div className="ccontext">
              <p className="nicheng">
                llaby  
              </p>
              <p className="times">08.01</p>
              <p className="context">其实个人觉得这件物品还是挺好的，因为家里刚搬进来没有多少家具，有了这件家具，家里有客人还是可以长面子的。   </p>
              <div className="otherscomments">
                <p className="others">
                  <span className="othersni">ang-el5</span>
                  <span className="otherscomment">：对的，挂在家里墙上很不错，非常好看</span>
                </p>
              </div>
            </div>
          </div>

          <div className="authcomment1">
            <DzCommentContainer><span className="cnums">3</span>&#xe601;</DzCommentContainer>
            <img className="ctouxiang" src={commentlogo} alt=""/>
            <div className="ccontext">
              <p className="nicheng">
                llaby  
              </p>
              <p className="times">08.01</p>
              <p className="context">其实个人觉得这件物品还是挺好的，因为家里刚搬进来没有多少家具，有了这件家具，家里有客人还是可以长面子的。   </p>
              <div className="otherscomments">
                <p className="others">
                  <span className="othersni">ang-el5</span>
                  <span className="otherscomment">：对的，挂在家里墙上很不错，非常好看</span>
                </p>
              </div>
            </div>
          </div>

          <div className="authcomment1">
            <DzCommentContainer><span className="cnums">3</span>&#xe601;</DzCommentContainer>
            <img className="ctouxiang" src={commentlogo} alt=""/>
            <div className="ccontext">
              <p className="nicheng">
                llaby  
              </p>
              <p className="times">08.01</p>
              <p className="context">其实个人觉得这件物品还是挺好的，因为家里刚搬进来没有多少家具，有了这件家具，家里有客人还是可以长面子的。   </p>
              <div className="otherscomments">
                <p className="others">
                  <span className="othersni">ang-el5</span>
                  <span className="otherscomment">：对的，挂在家里墙上很不错，非常好看</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="end">
          <Border1Container></Border1Container>
            <span className="endtext"><i className="dian1">.</i>END<i className="dian2">.</i></span>
          <Border2Container></Border2Container>
        </div>
        
        <footer className="commentend">
          <div className="write">
            <input type="text" className="writecomments" placeholder="评论千万条，礼貌第一条"/>
            <SendContainer>&#xe60c;</SendContainer>
          </div>
          
        </footer>
        
      </CommentsContainer>
    )
  }
}

export default withRouter(Comments)

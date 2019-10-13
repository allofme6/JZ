import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import {
  FooterContainer,
  ChatContainer,
  DzContainer
} from '../detail/views/StyledArticleDetail'

// import { ActionSheet } from 'antd-mobile';

// const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
// let wrapProps;
// if (isIPhone) {
//   wrapProps = {
//     onTouchStart: e => e.preventDefault(),
//   };
// }

 class Foot extends Component {
  render() {
    return (
      <FooterContainer>
        <div className="left">
          <div className="lcontext" >
            <i>&#xe600;</i>
            <span>说点什么</span>
          </div>
        </div>
        <ChatContainer onClick={this.props.onClickUp}>&#xe51b;<span className="cnums">3</span></ChatContainer>
        <div className="cc" onClick={this.props.onClickCollectUp} >
          <p 
          onClick={this.props.handleCollect} 
          className={this.props.collectActive === true ? 'active' : ''}></p>
          <span 
          onClick={this.props.handleCollect} 
          className={this.props.collectActive === true ? 'active' : ''}>2412</span>
        </div>
        <DzContainer 
          onClick={this.props.changeState} 
          className={this.props.color === true ? 'active' : ''}>&#xe601;
          <span 
          onClick={this.props.changeState} 
          className={this.props.color === true ? 'active' : ''} 
          >155</span>
        </DzContainer>
      </FooterContainer>
    )
  }
  // componentDidMount(){
  //   console.log(this)
  // }

  // showActionSheet = () => {
  //   const BUTTONS = ['收藏成功  查看','选择收藏夹','添加收藏夹'];
  //   ActionSheet.showActionSheetWithOptions({
  //     options: BUTTONS,
  //     cancelButtonIndex: BUTTONS.length - 1,
  //     destructiveButtonIndex: BUTTONS.length - 2,
  //     // title: 'title',
  //     maskClosable: true,
  //     'data-seed': 'logId',
  //     wrapProps,
  //   },
  //   (buttonIndex) => {
  //     this.setState({ clicked: BUTTONS[buttonIndex] });
  //   });
  // }
  
}

export default withRouter(Foot)

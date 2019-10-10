import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import {
  FooterContainer,
  ChatContainer,
  DzContainer
} from '../detail/views/StyledArticleDetail'


 class Foot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: false,
      collectActive:false,
    }
  }
  render() {
    return (
      <FooterContainer>
        <div className="left">
          <div className="lcontext" >
            <i>&#xe600;</i>
            <span>说点什么</span>
          </div>
        </div>
        <ChatContainer onClick={this.props.onClick}>&#xe51b;<span className="cnums">3</span></ChatContainer>
        <div className="cc" >
          <p  onClick={this.handleCollect} className={this.state.collectActive === true ? 'active' : ''}></p>
          <span onClick={this.handleCollect} className={this.state.collectActive === true ? 'active' : ''}>2412</span>
        </div>
        <DzContainer onClick={this.changeState} className={this.state.color === true ? 'active' : ''}>&#xe601;
          <span onClick={this.changeState} className={this.state.color === true ? 'active' : ''} >155</span>
        </DzContainer>
      </FooterContainer>
    )
  }
  

  handleClickUp = () => {
    console.log(this)
  }
  changeState = ()=>{
    this.setState({
      color: !this.state.color
    })
  }

  handleCollect =()=>{
    this.setState({
      collectActive: !this.state.collectActive
    })
  }
  
}

export default withRouter(Foot)

import React, { Component } from 'react'

import ArticleDetailUi from './ArticleDetailUi'

import connect from '../../connect'

 class ArticleDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      isShow:false,
      hidden:true,
      isMask:false
    }
  }
  render() {
    return (
        <ArticleDetailUi 
        onBack={this.handleBack}
        onClickUp={this.showDialog}
        onDown ={this.hiddenDialog}
        visible={this.state.visible}
        onClickCollectUp={this.showCollect}
        isShow={this.state.isShow}
        changeState={this.props.changeState}
        collectActive={this.props.collectActive}
        color={this.props.color}
        handleCollect={this.props.handleCollect}
        isMask = {this.state.isMask}
        showMask = {this.showMask}
        ></ArticleDetailUi>
    )
  }
  handleBack = () => {
    this.props.history.go(-1)
  }
  showDialog = () => {
    this.setState(
      {
        visible:!this.state.visible,
      },
    )
  }
  hiddenDialog=() => {
    this.setState(
      {
        visible:false,
        isShow:false
        
      }
    )
  }
  showCollect=() => {
    if(this.props.collectActive === false){
      this.setState(
        {
          isShow:!this.state.isShow,
          isMask:!this.state.isMask
        },)
    } 
  }
  showMask = () => {
    if(this.props.collectActive === true){
      this.setState({
        isMask : this.state.isMask
      })
    }else if(this.props.collectActive === false){
      this.setState({
        isMask : !this.state.isMask
      })
      console.log(1)
      this.showCollect()
    }
  }
  
  
  
}
export default connect(ArticleDetail)
import React, { Component } from 'react'

import ArticleDetailUi from './ArticleDetailUi'

import connect from '../../connect'

 class ArticleDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      isShow:false,
      hidden:true
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
    this.setState(
      {
        isShow:!this.state.isShow
      },
       ()=>{
      console.log(this.state.isShow)
     }
      )
      
  }
  
  
}
export default connect(ArticleDetail)
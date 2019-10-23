import React, { Component } from 'react'

import ArticleCollectsUi from './ArticleCollectsUi'

import { Toast } from 'antd-mobile'

import connect from '../../connect'

function successToast() {
  Toast.success('Load success', 1);
}

class ArticleCollectsContainer extends Component {
  render() {
    return (
      <ArticleCollectsUi
        onBack = {this.handleBack}
        onlyOnBack = {this.handleOnlyBack}
        onClick={successToast}
      >
        
      </ArticleCollectsUi>
    )
  }
  handleBack =() => {
    console.log(1)
      this.props.history.go(-1);
      Toast.success('提交成功', 300, () => {
        
      });  
      setTimeout(() => {
        Toast.hide();
      }, 1000);
  }
  handleOnlyBack = () => {
    this.props.history.go(-1)
    this.props.handleCollect()
  }
  
  componentDidMount(){
    console.log(this)
  }
}
export default connect(ArticleCollectsContainer)
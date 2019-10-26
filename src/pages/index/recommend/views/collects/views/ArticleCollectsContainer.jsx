import React, { Component } from 'react'

import ArticleCollectsUi from './ArticleCollectsUi'

import { Toast } from 'antd-mobile'

import connect from '../../connect'

function successToast() {
  Toast.success('Load success', 1);
}

class ArticleCollectsContainer extends Component {
  state = {
    collectionName: '',
    description: '',
  }

  render() {
    return (
      <ArticleCollectsUi
        onBack = {this.handleBack}
        onlyOnBack = {this.handleOnlyBack}
        onClick={successToast}
        collectionName={this.collectionName}
        changeCollectionName={this.changeCollectionName}
      >
        
      </ArticleCollectsUi>
    )
  }
  handleBack =() => {
    this.$get({
      url: '/api/addbookmark',
      params: {
        bname: this.state.collectionName,
        ddecr: this.state.description,
        uid: '1'
      }
    })
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

  changeCollectionName = (e) => {
    this.setState({
      collectionName: e.target.value
    })
  }

  changeDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  
}
export default connect(ArticleCollectsContainer)
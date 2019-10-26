import React, { Component } from 'react'

import ArticleCollectsUi from './ArticleCollectsUi'

import { Toast } from 'antd-mobile'

import connect from '../../connect'
import profileConnect from 'profile/store/connect'
import store from 'store'

function successToast() {
  Toast.success('Load success', 1);
}

@profileConnect
class ArticleCollectsContainer extends Component {
  state = {
    collectionName: '',
    description: '',
    bolgId: ''
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
  handleBack = async () => {
    await this.$get({
      url: '/api/addbookmark',
      params: {
        bname: this.state.collectionName,
        ddecr: this.state.description,
        uid: this.props.userMessage.userID.uId
      }
    })
    let bookMark = (await this.$post(
      '/api/findbookmark',
      {
        uid: this.props.userMessage.userID.uId
    })).data

    let item = bookMark.data.filter((value) => {
      return value.bName === this.state.collectionName
    })
    
    store.set('collection',store.get('collection') ? [...store.get('collection'),this.state.bolgId] : [this.state.bolgId])
    this.$get({
      url: '/api/addcollect',
      params: {
        blogid: this.state.bolgId,
        uid: this.props.userMessage.userID.uId,
        bookid: item[0].bId
      }
    }
    )
    


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
    console.log(this.props.location.state)
    this.setState({
      bolgId: this.props.location.state.blogId
    })
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
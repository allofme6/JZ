import React, { Component } from 'react'

import ArticleDetailUi from './ArticleDetailUi'

import connect from '../../connect'
import profileConnect from 'profile/store/connect'

@profileConnect
 class ArticleDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: '',
      visible: false,
      isShow:false,
      hidden:true,
      isMask:false,
      replyblogList: [],
      collectionBook: [],
      ArticleDetailList:{
        imageUrl: 'https://img.haohaozhu.cn/App-imageShow/o_phone/887df21ji1xg0Yn00phwlo41q4z0?iv=1&w=1080&h=1351.3513513514',
        content: '自由',
        reply: '3',
        collect: '3',
        like: '3'
      },
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
        ArticleDetailList={this.state.ArticleDetailList}
        changeComment={this.changeComment}
        comment={this.state.comment}
        sendComment={this.sendComment}
        replyblogList={this.state.replyblogList}
        collectionBook={this.state.collectionBook}
        selectCollect={this.selectCollect}
        ></ArticleDetailUi>
    )
  }

  selectCollect = (blogid, uid, bookid) => {
    console.log(blogid, uid, bookid)
    this.$get({
      url: '/api/addcollect',
      params: {
        blogid,
        uid,
        bookid
      }
    })
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

    this.$get({
      url: '/api/findbookmark',
      params: {
        uid: this.props.userMessage.userID.uId
      }
    })
    .then((result) => {
      this.setState({
        collectionBook: result.data.data
      }, () => {
        console.log(this.state.collectionBook)
      })
    })
  }
  showMask = () => {
    if(this.props.collectActive === true){
      this.setState({
        isMask : this.state.isMask
      })
    }
  }

  async componentDidMount(){
    // console.log(this.props.match.params.id)
    let result =await this.$get({
      url:'/api/findbybid',
      params: {
        bolgId : this.props.match.params.id
      }
    })
    this.setState({
      ArticleDetailList: result.data.data.blog,
      replyblogList: result.data.data.replyblogList
    })
  }

  changeComment = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  sendComment = (e) => {
    if(e.charCode === 13 || e.target.tagName === 'I') {
      this.setState({
        comment: ''
      })
      this.$post('/api/addreply', {
        blogid: this.state.ArticleDetailList.bolgId,
        uid: '1',
        content: this.state.comment
      })
      .then(async (result) => {
        let resultSend =await this.$get({
          url:'/api/findbybid',
          params: {
            bolgId : this.props.match.params.id
          }
        })
        this.setState({
          ArticleDetailList: resultSend.data.data.blog,
          replyblogList: resultSend.data.data.replyblogList
        })
      })
    }
  }
}
export default connect(ArticleDetail)
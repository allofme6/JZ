import React, { Component } from 'react'

import ArticleDetailUi from './ArticleDetailUi'

// import {Provider} from 'react-redux'

// import connect from '../../connect'

// import store from 'store/index.js'
// @connect
 class ArticleDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }
  render() {
    return (
      // <Provider store={store}>
        <ArticleDetailUi 
        onBack={this.handleBack}
        onClick={this.showDialog}
        onDown ={this.hiddenDialog}
        visible={this.state.visible}
        ></ArticleDetailUi>
      // </Provider>
    )
  }
  handleBack = () => {
    this.props.history.go(-1)
  }
  showDialog = () => {
    this.setState(
      {
        visible:!this.state.visible
      }
    )
  }
  hiddenDialog=() => {
    this.setState(
      {
        visible:false
      }
    )
    console.log(1)
  }

 
  
}
export default ArticleDetail
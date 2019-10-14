import React, { Component } from 'react'

import ArticleCollectsUi from './ArticleCollectsUi'

export default class ArticleCollectsContainer extends Component {
  render() {
    return (
      <ArticleCollectsUi
        onBack = {this.handleBack}
      >
        
      </ArticleCollectsUi>
    )
  }
  handleBack =() => {
      this.props.history.go(-1)
  }
  componentDidMount(){
    console.log(this)
  }
  
}

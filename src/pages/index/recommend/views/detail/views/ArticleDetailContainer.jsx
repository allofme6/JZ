import React, { Component } from 'react'

import ArticleDetailUi from './ArticleDetailUi'

export default class ArticleDetail extends Component {
  render() {
    return (
      <ArticleDetailUi onBack={this.handleBack}></ArticleDetailUi>
    )
  }
  handleBack = () => {
    this.props.history.go(-1)
  }
}

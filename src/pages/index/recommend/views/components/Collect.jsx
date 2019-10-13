import React, { Component } from 'react'

import {CollectContainer,CollectBorder,AddContainer} from '../detail/views/StyledArticleDetail'
import { withRouter } from 'react-router-dom'
import { GlobalStyle } from 'components/styled/styledPublish.js'

class Collect extends Component {
    render(){
      return (
        <CollectContainer display = {this.props.display}>
          <GlobalStyle/>
          <div className="collectcontainer">
            <p className="first">
              <span>收藏成功</span>
              <span onClick={this.handleToCollect}>查看</span>
            </p>
            <p className="second">
              <span>选择收藏夹</span>
              <CollectBorder></CollectBorder>
            </p>
            <div className="third">
              <AddContainer onClick={this.handleCollets}>&#xe6d6;</AddContainer>
              <span className="add">添加收藏夹</span>
            </div>
          </div>
        </CollectContainer>
      )
    }
    handleCollets= () => {
      this.props.history.push('/articleCollect')
      this.props.handleCollect()
    }
    handleToCollect =() => {
      this.props.history.push('/collection')
    }
    componentDidMount(){
      console.log(this)
    }
    
  }
export default withRouter(Collect)
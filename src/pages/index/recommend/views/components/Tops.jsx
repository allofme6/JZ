import React, { Component } from 'react'

import {TopContainer} from '../StyledRecommend'

import { withRouter } from 'react-router-dom'

import { GlobalStyle } from 'components/styled/styledPublish.js'


import collect from 'images/collect.png'
import activecollect from 'images/activecollect.png'


class Tops extends Component {

  render() {
    return (
      <TopContainer>
        <GlobalStyle />
        <ul>
          {
            this.props.articleList.map((value, index)=>{
              return(
                <li key={index}>
                  <img src={`http://10.9.24.153:8080/${value.imageUrl}`}  onClick={() => this.handleClick(value.bolgId)} alt=""/>
                  <p>{value.title}</p>
                  <div className="banners">
                    <div className="imgs1">
                      <img className="touxiang" src={`http://10.9.24.153:8080/${value.users.iconUrl}`} alt=""/>
                      <span>{value.users.uname}</span>
                    </div>
                    
                    {/* <p onClick={this.props.onClick} className={this.props.className}></p> */}
                    <div className="imgs2">
                      <img 
                        src={this.props.collectActive === true ? activecollect:collect } alt="" 
                        onClick={this.props.handleCollect} />
                      <span 
                        onClick={this.props.onClick} 
                        className={this.props.className}>{value.collect}</span>
                    </div>
                    
                  </div>
                </li>
              )
            })
          }
        </ul>
      </TopContainer>
    )
  }

  handleClick = (id)=>{
    console.log(id)
    this.props.history.push(`/articleDetail/${id}`)

  
  }

}

export default withRouter(Tops)

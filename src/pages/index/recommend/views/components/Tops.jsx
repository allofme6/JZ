import React, { Component } from 'react'

import {TopContainer} from '../StyledRecommend'

import { withRouter } from 'react-router-dom'

import { GlobalStyle } from 'components/styled/styledPublish.js'


import collect from 'images/collect.png'
import activecollect from 'images/activecollect.png'
import store from 'store'


class Tops extends Component {
  state = {
    list:[]
  }
  render() {
    return (
      <TopContainer>
        <GlobalStyle />
        <ul>
          {
            this.props.articleList.map((value, index)=>{
              return(
                <li key={index}>
                  <img src={value.imageUrl.indexOf('https') === -1 ? `http://47.95.121.255:8080/${value.imageUrl}` : value.imageUrl}  onClick={() => this.handleClick(value.bolgId)} alt=""/>
                  {/* <img src={value.imageUrl}  onClick={() => this.handleClick(value.bolgId)} alt=""/> */}
                  <p>{value.title}</p>
                  <div className="banners">
                    <div className="imgs1">
                      <img className="touxiang" src={`http://47.95.121.255:8080/${value.users.iconUrl}`} alt=""/>
                      {/* <img className="touxiang" src={value.users.iconUrl} alt=""/> */}

                      <span>{value.users.uname}</span>
                    </div>
                    
                    {/* <p onClick={this.props.onClick} className={this.props.className}></p> */}
                    <div className="imgs2">
                      {/* <div className="reward">
                        <img src={reward} alt=""/>
                      </div> */}
                      <img 
                        // src={this.props.collectActive === true ? activecollect:collect } alt="" 
                        src={this.state.list.length > 0 ? (this.state.list.includes(value.bolgId) ? activecollect : collect) :collect}
                        onClick={this.props.handleCollect} 
                      />
                      <span 
                        onClick={this.props.onClick} 
                        className={this.props.className}>{value.collect}
                      </span>
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
    this.props.history.push(`/articleDetail/${id}`)
  }
  componentDidMount(){
    store.get('collection') && this.setState({
      list : store.get('collection')
    })
  }
}

export default withRouter(Tops)

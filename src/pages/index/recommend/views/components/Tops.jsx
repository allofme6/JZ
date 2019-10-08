import React, { Component } from 'react'

import {TopContainer} from '../StyledRecommend'

import { withRouter } from 'react-router-dom'

import { GlobalStyle } from 'components/styled/styledPublish.js'

import logos from 'images/logos.png'
import collect from 'images/collect.png'
import touxiang from 'images/touxiang.png'

class Tops extends Component {
  render() {
    return (
      <TopContainer>
        <GlobalStyle />
        <ul>
        <li>
          <img src={logos}  onClick={this.handleClick} alt=""/>
          <p>北欧客厅装饰画沙发背景墙现代简约餐厅墙面壁画</p>
          <div className="banners">
            <img className="touxiang" src={touxiang} alt=""/>
            <span>久处不也</span>
            <img src={collect} alt="" className="collect"/>
            <span className="cNum">312</span>
          </div>
        </li>

        <li>
          <img src={logos}  onClick={this.handleClick} alt=""/>
          <p>北欧客厅装饰画沙发背景墙现代简约餐厅墙面壁画</p>
          <div className="banners">
            <img className="touxiang" src={touxiang} alt=""/>
            <span>久处不也</span>
            <img src={collect} alt="" className="collect"/>
            <span className="cNum">312</span>
          </div>
        </li>

        <li>
          <img src={logos}  onClick={this.handleClick} alt=""/>
          <p>北欧客厅装饰画沙发背景墙现代简约餐厅墙面壁画</p>
          <div className="banners">
            <img className="touxiang" src={touxiang} alt=""/>
            <span>久处不也</span>
            <img src={collect} alt="" className="collect"/>
            <span className="cNum">312</span>
          </div>
        </li>

        <li>
          <img src={logos}  onClick={this.handleClick} alt=""/>
          <p>北欧客厅装饰画沙发背景墙现代简约餐厅墙面壁画</p>
          <div className="banners">
            <img className="touxiang" src={touxiang} alt=""/>
            <span>久处不也</span>
            <img src={collect} alt="" className="collect"/>
            <span className="cNum">312</span>
          </div>
        </li>
        </ul>
      </TopContainer>
    )
  }

  handleClick = ()=>{
    this.props.history.push('/articleDetail')
  }
}

export default withRouter(Tops)

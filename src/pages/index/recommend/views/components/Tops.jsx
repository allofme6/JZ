import React, { Component } from 'react'

import {TopContainer} from '../StyledRecommend'

import { withRouter } from 'react-router-dom'

class Tops extends Component {
  render() {
    return (
      <TopContainer onClick={this.handleClick}>
        <ul>
        <li>
          <img src="https://upload-images.jianshu.io/upload_images/18473406-551c5c41a2b8078a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
          <p>北欧客厅装饰画沙发背景墙现代简约餐厅墙面壁画</p>
          <div className="banners">
            <img className="touxiang" src="https://upload-images.jianshu.io/upload_images/18473406-d019ec2421904508.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
            <span>久处不也</span>
            <img src="https://upload-images.jianshu.io/upload_images/18473406-ac84c748bc8b2318.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="" className="collect"/>
            <span className="cNum">312</span>
          </div>
        </li>

        <li>
          <img src="https://upload-images.jianshu.io/upload_images/18473406-551c5c41a2b8078a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
          <p>北欧客厅装饰画沙发背景墙现代简约餐厅墙面壁画</p>
          <div className="banners">
            <img className="touxiang" src="https://upload-images.jianshu.io/upload_images/18473406-d019ec2421904508.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
            <span>久处不也</span>
            <img src="https://upload-images.jianshu.io/upload_images/18473406-ac84c748bc8b2318.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="" className="collect"/>
            <span className="cNum">312</span>
          </div>
        </li>

        <li>
          <img src="https://upload-images.jianshu.io/upload_images/18473406-551c5c41a2b8078a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
          <p>北欧客厅装饰画沙发背景墙现代简约餐厅墙面壁画</p>
          <div className="banners">
            <img className="touxiang" src="https://upload-images.jianshu.io/upload_images/18473406-d019ec2421904508.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
            <span>久处不也</span>
            <img src="https://upload-images.jianshu.io/upload_images/18473406-ac84c748bc8b2318.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="" className="collect"/>
            <span className="cNum">312</span>
          </div>
        </li>

        <li>
          <img src="https://upload-images.jianshu.io/upload_images/18473406-551c5c41a2b8078a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
          <p>北欧客厅装饰画沙发背景墙现代简约餐厅墙面壁画</p>
          <div className="banners">
            <img className="touxiang" src="https://upload-images.jianshu.io/upload_images/18473406-d019ec2421904508.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
            <span>久处不也</span>
            <img src="https://upload-images.jianshu.io/upload_images/18473406-ac84c748bc8b2318.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="" className="collect"/>
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

import React from 'react'

import {
  ArticleCollectsContainer,
  BorderContainer
} from './StyledArticleCollects'

import { NavBar, Icon } from 'antd-mobile';

export default (props)=>{
  return (
    <ArticleCollectsContainer>
      <div className="collects">
        <NavBar
        mode="light"
        icon={<Icon type="cross" size="lg" color="#000"/>}
        onLeftClick={props.onBack}
        rightContent={[
          <span key="0" type="search" style={{ fontsize:'.15rem',color:'#333333'}} >提交</span>,
        ]}
      >添加收藏夹</NavBar>
        <div className="slider"></div>
        <div className="one"><input type="text" placeholder="收藏夹名称"/></div>
        <BorderContainer></BorderContainer>
        <div className="one"><input type="text" placeholder="收藏夹描述"/></div>
      </div>
      <div className="two"></div>
    </ArticleCollectsContainer>
  )

}
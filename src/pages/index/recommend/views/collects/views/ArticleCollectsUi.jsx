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
        onLeftClick={props.onlyOnBack}
        rightContent={[
          <span key="0" type="search" style={{ fontsize:'.15rem',color:'#333333'}}  onClick={props.onBack} >提交</span>,
        ]}
      >添加收藏夹</NavBar>
        <div className="slider"></div>
        <div className="one"><input type="text" placeholder="收藏夹名称"/></div>
        <BorderContainer></BorderContainer>
        <div className="one three"><textarea name="" id="" placeholder='收藏夹描述' cols="30" rows="100"></textarea></div>
      </div>
    </ArticleCollectsContainer>
  )

}
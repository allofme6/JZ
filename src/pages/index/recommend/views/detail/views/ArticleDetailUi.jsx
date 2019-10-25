import React from 'react'
import Zmage from 'react-zmage'

import { NavBar} from 'antd-mobile'
// import { ActionSheet, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';

import {
  ArticleDetailContainer,
  SlideContainer,
} from './StyledArticleDetail'

import Foot from '../../components/Foot'
import Comments from '../../components/Comments'
import Collect from '../../components/Collect'

import { GlobalStyle } from 'components/styled/styledPublish.js'

import backD from 'images/backD.png'


const ArticleDetailUi=(props)=>{
    return (
      <ArticleDetailContainer >
        <GlobalStyle/>
        <div className="boxs">
          <div className="nav"><NavBar><img onClick={props.onBack} src={backD} alt=""/></NavBar></div>
          {/* {
            props.ArticleDetailList.map((value)=>{
              return (
                <div className="detailbox">
                  <div className="bigpic">
                    <Zmage hotKey={{close: true}} className="pic" src={`http://10.9.24.153:8080/${value.blog.imageUrl}`} alt=""/>
                  </div>
                  <p className="details1">
                  {value.blog.content}
                  </p>
                  <SlideContainer></SlideContainer>
                    <p className="auth">创建于2019.07.05 更新于2019.08.16<br/>
                      文章仅代表作者观点，与好好住立场无关。
                      本文版权归好好住编辑部所有，任何形式转载请联系作者。
                    </p>
              </div>
              )
            })
          } */}
         
          <Foot 
            color={props.color}
            changeState={props.changeState} 
            onClickUp={props.onClickUp}
            handleCollect={props.handleCollect}
            collectActive={props.collectActive}
            onClickCollectUp={props.onClickCollectUp}
            isMask = {props.isMask}
            showMask = {props.showMask}
            ></Foot>
          
          <Comments
              onClick={props.onDown} 
              display = {props.visible === true ? 'block' :'none'}
              changeState={props.changeState} 
              className={props.color}>&#xe601;
            ></Comments>

            <Collect
              handleCollect={props.handleCollect}
              display = {props.isShow === true ? 'block' : 'none' } 
              ></Collect>
            
        </div>
          <div className={props.isMask === true ? 'mask':''} onClick={props.showMask}></div>
          <div className={props.visible === true ? 'mask':''}></div>

      </ArticleDetailContainer>
    )
}

export default ArticleDetailUi

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
    let pubDate = new Date(props.ArticleDetailList.pubDate)
    let editDate = new Date(props.ArticleDetailList.editDate)
    let pubDateFormat = '' + pubDate.getFullYear() + '.' + (pubDate.getMonth()+1) + '.' + pubDate.getDate()
    let editDateFormat = '' + editDate.getFullYear() + '.' + (editDate.getMonth()+1) + '.' + editDate.getDate()
    return (
      <ArticleDetailContainer >
        <GlobalStyle/>
        <div className="boxs">
          <div className="nav"><NavBar><img onClick={props.onBack} src={backD} alt=""/></NavBar></div>
            <div className="detailbox">
              <div className="bigpic">
                <Zmage hotKey={{close: true}} className="pic" src={`http://47.95.121.255:8080/${props.ArticleDetailList.imageUrl}`} alt=""/>
              </div>
              <p className="details1">
                {props.ArticleDetailList.content}
              </p>
              <SlideContainer></SlideContainer>
                <p className="auth">
                  创建于{pubDateFormat} 更新于{editDateFormat}<br/>
                  文章仅代表作者观点，与家装宝典立场无关。
                  本文版权归家装宝典编辑部所有，任何形式转载请联系作者。
                </p>
              </div>
          <Foot 
            comment={props.comment}
            reward={props.reward}
            replyblogList={props.replyblogList}
            changeComment={props.changeComment}
            sendComment={props.sendComment}
            color={props.color}
            changeState={props.changeState} 
            onClickUp={props.onClickUp}
            handleCollect={props.handleCollect}
            collectActive={props.collectActive}
            onClickCollectUp={props.onClickCollectUp}
            isMask = {props.isMask}
            showMask = {props.showMask}
            ArticleDetailList={props.ArticleDetailList}
            ></Foot>
          
          <Comments
            comment={props.comment}
            changeComment={props.changeComment}
            sendComment={props.sendComment}
            onClick={props.onDown} 
            display = {props.visible === true ? 'block' :'none'}
            changeState={props.changeState} 
            replyblogList={props.replyblogList}
            ArticleDetailList={props.ArticleDetailList}
            className={props.color}>&#xe601;
          ></Comments>

          <Collect
            handleCollect={props.handleCollect}
            selectCollect={props.selectCollect}
            collectionBook={props.collectionBook}
            ArticleDetailList={props.ArticleDetailList}
            display = {props.isShow === true ? 'block' : 'none' } 
          ></Collect>
            
        </div>
          <div className={props.isMask === true ? 'mask':''} onClick={props.showMask}></div>
          <div className={props.visible === true ? 'mask':''}></div>

      </ArticleDetailContainer>
    )
}

export default ArticleDetailUi

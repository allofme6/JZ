import React from 'react'

import { NavBar} from 'antd-mobile'

import {
  ArticleDetailContainer,
  SlideContainer,
} from '../../StyledArticleDetail'

import detail from 'images/Details.png'
import backD from 'images/backD.png'


const ArticleDetailUi=(props)=>{
    return (
      <ArticleDetailContainer>
        <div className="boxs">

        <NavBar>
          <img onClick={props.onBack} src={backD} alt=""/></NavBar>
        <div>
          <img className="pic" src={detail} alt=""/>
        </div>
        <p>
        北欧客厅装饰画沙发背景墙现代简约餐厅墙面壁画卧室组合挂画 栖息之鹿+黑白钟表款占墙面积175*96cm
        </p>
        <SlideContainer></SlideContainer>
        {/* <div className="box1">
          <BoxContainer>
            <li><span className="topic">话题</span> </li>
            <li>百元推荐大会</li>
            <li>会花钱是一种技能，来炫耀你买过的百元内好物吧！说说你是在哪里买到它的，亲测之后感觉如何？</li>
          </BoxContainer>
        </div> */}

          <p className="auth">创建于2019.07.05 更新于2019.08.16<br/>
          文章仅代表作者观点，与好好住立场无关。
          本文版权归好好住编辑部所有，任何形式转载请联系作者。
          </p>

          <footer>
            <div className="left"></div>
          </footer>

        </div>

      </ArticleDetailContainer>
    )
}

export default ArticleDetailUi

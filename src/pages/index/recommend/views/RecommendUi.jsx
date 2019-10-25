import React from 'react'

import {
    RecommendContainer
} from './StyledRecommend.js'

import Search from 'components/search/Search'

import Tops from './components/Tops'

const RecommendUi =(props)=> {
        return (
            <RecommendContainer >
               <Search onChangeClick={props.onChangeClick}></Search>
               <Tops 
               collectActive = {props.collectActive}
               onClick={props.onClick} 
               className={props.collectActive === true ? 'active' : ''}
               articleList={props.articleList}
               ></Tops>
            </RecommendContainer>
        )
    }
   
export default RecommendUi
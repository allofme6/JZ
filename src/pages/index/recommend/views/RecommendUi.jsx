import React from 'react'

import {
    RecommendContainer
} from './StyledRecommend.js'

import Search from 'components/search/Search'

import Tops from './components/Tops'

const RecommendUi =(props)=> {
        return (
            <RecommendContainer >
               <Search></Search>
               <Tops 
               onClick={props.onClick} 
               className={props.collectActive === true ? 'active' : ''}></Tops>
            </RecommendContainer>
        )
    }
   

export default RecommendUi
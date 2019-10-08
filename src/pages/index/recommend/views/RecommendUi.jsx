import React, { Component } from 'react'

import {
    RecommendContainer
} from './StyledRecommend.js'

import Search from 'components/search/Search'

import Tops from './components/Tops'

class RecommendUi extends Component {
    render() {
        return (
            <RecommendContainer >
               <Search></Search>
               <Tops></Tops>
            </RecommendContainer>
        )
    }
}

export default RecommendUi
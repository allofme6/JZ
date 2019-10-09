import React, { Component } from 'react'

import {CollectionContainer} from '../StyledCollection'

import NavBar from 'components/navBar/NavBar'
// import Item from 'components/profileItem/ProfileItem'
import EmptyTip from 'components/emptyTip/EmptyTip'


class CollectionUI extends Component {
    render() {
        return (
            <CollectionContainer>
                <NavBar
                    aligns="center"
                    colors="#000"
                    titleText="我的收藏"
                />
                {/* <div className="collection-list">
                    <Item></Item>
                </div> */}
                 <EmptyTip
                    bearPosition="top: 1.74rem;"
                    tipTitle="我的收藏空空入也"
                    tipPosition="top: 3.29rem"
                ></EmptyTip>
            </CollectionContainer>
        )
    }
}

export default CollectionUI
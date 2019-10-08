import React, { Component } from 'react'

import {DraftContainer} from '../StyledDraft'

import NavBar from 'components/navBar/NavBar'
import Item from 'components/profileItem/ProfileItem'
// import EmptyTip from 'components/emptyTip/EmptyTip'


class DraftUI extends Component {
    render() {
        return (
            <DraftContainer>
                <NavBar
                    aligns="center"
                    colors="#000"
                    titleText="草稿箱"
                />
                <div className="collection-list">
                    <Item></Item>
                </div>
                 {/* <EmptyTip
                    bearPosition="top: 1.71rem;left: .96rem;"
                    tipTitle="草稿箱空空入也"
                    tipPosition="top: 3.26rem"
                ></EmptyTip> */}
            </DraftContainer>
        )
    }
}

export default DraftUI
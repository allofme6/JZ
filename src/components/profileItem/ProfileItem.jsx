import React, { Component } from 'react'

import {ItemContainer} from './StyledProfileItem'
import itemImg from 'images/profile/item1.jpg'

class ProfileItem extends Component {
    render() {
        return (
            <ItemContainer>
                <div className="item-box">
                    <div className="item-content">
                        专修的时候有些很小的细节都可能会是大麻烦，所以要把各个角度的数据测量......
                    </div>
                    <div className="item-img">
                        <img src={itemImg} alt=""/>
                    </div>
                </div>
            </ItemContainer>
        )
    }
}

export default ProfileItem
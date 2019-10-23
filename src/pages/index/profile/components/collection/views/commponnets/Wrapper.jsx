import React, { Component } from 'react';

// import Item from 'components/profileItem/ProfileItem'
import EmptyTip from 'components/emptyTip/EmptyTip'
import itemImg from 'images/profile/item1.jpg'

class Wrapper extends Component {
    render() {
        console.log(this.props);
        return (
            <>
                {
                this.props.that.collectionList 
                ? (
                <div className="collection-wrapper">
                    <ul>
                        <li>
                            <img src={itemImg} alt=""/>
                            <div className="collection-tiele">
                                <div className="title">收藏夹一</div>
                                <div className="count">2个内容·最近浏览</div>
                            </div>
                        </li>
                    </ul>
                </div>
                ) 
                : (
                    <EmptyTip
                        bearPosition="top: 1.74rem;"
                        tipTitle="我的收藏空空入也"
                        tipPosition="top: 3.29rem"
                    ></EmptyTip>
                )

             }
            </>
        );
    }
}

export default Wrapper;
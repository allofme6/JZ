import React, { Component } from 'react';

// import Item from 'components/profileItem/ProfileItem'
import EmptyTip from 'components/emptyTip/EmptyTip'
import itemImg from 'images/profile/item1.jpg'

class Wrapper extends Component {
    render() {
        return (
            <>
                {
                    this.props.list && this.props.list.length
                ? (
                <div className="collection-wrapper">
                    <ul>
                       {
                           this.props.list.map((value,index)=>{
                               return(
                                <li key={value.bId} onClick={()=>{this.props.handleAction(value)}}>
                                    <img src={itemImg} alt=""/>
                                    <div className="collection-tiele">
                                        <div className="title">{value.bName}</div>
                                        <div className="count">{value.dDecr}</div>
                                    </div>
                                </li>
                               )
                           })
                       }
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
import React from 'react'

import NavBar from 'components/navBar/NavBar'
import Card from 'components/card/Card'
import EmptyTip from 'components/emptyTip/EmptyTip'
import Item from 'components/profileItem/ProfileItem'

import {ProfilePublishContainer} from '../StyledProfilePublish'

export default (props)=>{
    console.log(props);
    return (
        <ProfilePublishContainer>
            <div className="publish-card">
                <NavBar colors="#2F2F2F" aligns="left" titleText="可爱的小住户"></NavBar>
                <Card  top=".38rem" {...props}></Card>
                {/* <div className="cover">更改封面</div> */}
                <div className="edit" onClick={()=>{props.changeRoute('/profile/presonal')}}>编辑个人资料</div>
            </div>
            <div className="publish-main">
                <h3>我的发布</h3>
                {
                    props.publishList.length
                    ?(
                        <div className="publish-list">
                           {
                               props.publishList.map((value,index)=>{
                                    return(
                                        <Item
                                            item={value}
                                            key={index}
                                        ></Item>
                                    )
                               })
                           }
                        </div>
                    )
                    :(
                        <EmptyTip
                            actionTitle= "去发布"
                            tipTitle  = "还未发布过内容"
                            bearPosition= "top: .59rem;"
                            tipPosition = "top: 2.11rem;"
                            actionPosition = "top: 2.33rem;"
                        ></EmptyTip>
                    )
                }
            </div>
        </ProfilePublishContainer>
    )
}

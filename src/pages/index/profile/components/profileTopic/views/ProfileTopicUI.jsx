import React from 'react';

import {ProfileTopicContainer} from '../StyledProfileTopic';
import NavBar from 'components/navBar/NavBar';
import Item from 'components/profileItem/ProfileItem';
import EmptyTip from 'components/emptyTip/EmptyTip';

export default (props)=>{
    console.log(props);
    return (
        <ProfileTopicContainer>
            <NavBar
                aligns="center"
                titleText="我的讨论"
                colors="#000"
            />
            {
                props.topicList.length
                ?(
                    <div className="topic-list">
                        {
                            props.topicList.map((value,index)=>{
                                return (<Item item={value} key={value.answerId} handleAction={props.handleAction}></Item>)
                            })
                        }
                     </div>
                )
                :(
                    <EmptyTip
                        bearPosition="top: 1.89rem;"
                        tipTitle= "还未参与过讨论"
                        actionTitle= "去讨论"
                        tipPosition= "top: 3.78rem;"
                        actionPosition= "top: 3.99rem;"
                        handleChange= {props.handleChange}
                    />
                )
            }
        </ProfileTopicContainer>
    )
}

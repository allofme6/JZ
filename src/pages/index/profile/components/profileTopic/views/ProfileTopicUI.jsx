import React, { Component } from 'react';

import {ProfileTopicContainer} from '../StyledProfileTopic';
import NavBar from 'components/navBar/NavBar';
import Item from 'components/profileItem/ProfileItem';
// import EmptyTip from 'components/emptyTip/EmptyTip';

class ProfileTopicUI extends Component {
    render() {
        return (
            <ProfileTopicContainer>
                <NavBar
                    aligns="center"
                    titleText="我的讨论"
                    colors="#000"
                />
                <div className="topic-list">
                    <Item/>
                    <Item/>
                </div>
                {/* <EmptyTip
                    bearPosition="top: 1.89rem;left: 1.04rem;"
                    tipTitle= "还未参与过讨论"
                    actionTitle= "去讨论"
                    tipPosition= "top: 3.78rem;"
                    actionPosition= "top: 3.99rem;"
                /> */}
            </ProfileTopicContainer>
        );
    }
}

export default ProfileTopicUI;
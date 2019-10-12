import React, { Component } from 'react';

import {Route,Redirect,Switch} from 'react-router-dom';

import {ProfileBody} from '../StyledProfile';

import {Wallet} from 'profileComponents/wallet/'
import {Draft} from 'profileComponents/draft/'
import {ProfileTopic} from 'profileComponents/profileTopic/'
import {Record} from 'profileComponents/record/'
import {Collection} from 'profileComponents/collection/'
import {Setup,Presonal} from 'profileComponents/setup/'
import {ProfilePublish} from 'profileComponents/profilePublish/'
import {Message} from 'profileComponents/message/'

class Profile extends Component {
    render() {
        let path = this.props.match.url
        return (
            <ProfileBody>
                <Switch>
                    <Route path={`${path}/wallet`} component={Wallet}></Route>
                    <Route path={`${path}/draft`} component={Draft}></Route>
                    <Route path={`${path}/topic`} component={ProfileTopic}></Route>
                    <Route path={`${path}/record`} component={Record}></Route>
                    <Route path={`${path}/collection`} component={Collection}></Route>
                    <Route path={`${path}/setup`} component={Setup}></Route>
                    <Route path={`${path}/profilepublish`} component={ProfilePublish}></Route>
                    <Route path={`${path}/message`} component={Message}></Route>
                    <Route path={`${path}/presonal`} component={Presonal}></Route>
                    <Redirect from={path} exact to={'/index/profile'}></Redirect>
                </Switch>
            </ProfileBody>
        );
    }
}

export default Profile;
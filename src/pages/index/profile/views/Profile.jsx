import React, { Component } from 'react';

import {Route,Redirect,Switch} from 'react-router-dom';

import {ProfileBody} from '../StyledProfile';

import {Wallet} from 'profileComponents/wallet/'
import {Draft} from 'profileComponents/draft/'
import {ProfileTopic} from 'profileComponents/profileTopic/'
import {Record} from 'profileComponents/record/'
import {Collection} from 'profileComponents/collection/'
import {Setup,Presonal,Intro,NickName,AccessSecurity,ChangePw,ChangePhone} from 'profileComponents/setup/'
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
                    <Route path={`${path}/setup`} component={Setup} exact></Route>
                    <Route path={`${path}/setup/intro`} component={Intro}></Route>
                    <Route path={`${path}/setup/nickname`} component={NickName}></Route>
                    <Route path={`${path}/setup/changePwd`} component={ChangePw}></Route>
                    <Route path={`${path}/setup/changePhone`} component={ChangePhone}></Route>
                    <Route path={`${path}/profilepublish`} component={ProfilePublish}></Route>
                    <Route path={`${path}/profileAccount`} component={ProfilePublish}></Route>
                    <Route path={`${path}/message`} component={Message}></Route>
                    <Route path={`${path}/presonal`} component={Presonal}></Route>
                    <Route path={`${path}/accesssecurity`} component={AccessSecurity}></Route>
                    <Redirect from={path} exact to={'/index/profile'}></Redirect>
                </Switch>
            </ProfileBody>
        );
    }
}

export default Profile;
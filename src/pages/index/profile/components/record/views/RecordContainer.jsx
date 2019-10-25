import React, { Component } from 'react';

import RecordUI from './RecordUI';

import connect from 'profile/store/connect'

@connect
class RecordContainer extends Component {
    state = {
        recordList: []
    }
    render() {
        return (
            <RecordUI recordList={this.state.recordList} handleClick={this.handleClick}/>
        );
    }
    handleClick= (value)=>{
        // this.history.push()
    }
    async componentDidMount(){
        let res =( await this.$get({
            url: '/api/getRecord',
            params:{
                uid: this.props.userMessage.userID.uId
            }
        })).data
        this.setState({
            recordList: res.data
        })
    }
}

export default RecordContainer;
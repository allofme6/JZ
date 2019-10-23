import React, { Component } from 'react';

import RecordUI from './RecordUI';
class RecordContainer extends Component {
    state = {
        recordList: []
    }
    render() {
        return (
            <RecordUI recordList={this.state.recordList}/>
        );
    }
    async componentDidMount(){
        // console.log(this.state.recordList);
        let res = await this.$get({
            url: '/api/getRecord',
            params:{
                uid: '' // 用户id
            }
        })
        this.setState({
            recordList: res.data
        })
    }
}

export default RecordContainer;
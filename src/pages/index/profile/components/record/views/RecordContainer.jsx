import React, { Component } from 'react';

import RecordUI from './RecordUI';
class RecordContainer extends Component {
    render() {
        return (
            <RecordUI/>
        );
    }
    componentDidMount(){
        // 这里做浏览记录的请求
        // this.$get()
    }
}

export default RecordContainer;
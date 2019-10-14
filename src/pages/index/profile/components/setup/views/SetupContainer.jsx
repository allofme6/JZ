import React, { Component } from 'react';
import SetupUI from './SetupUI'


class SetupContainer extends Component {
    render() {
        return <SetupUI
            handleActions={this.handleActions}
        />
    }
    handleActions= (type)=>{
        return ()=>{
            this.props.history.push(`${type}`)
        }
    }
}

export default SetupContainer;
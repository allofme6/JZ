import React, { Component } from 'react'
import ProfileUI from './ProfileUI'
export default class profileContainer extends Component {
    render() {
        return  <ProfileUI handleClick={this.handleClick}></ProfileUI>
    }
    handleClick = (type)=>{
        this.props.history.push(`/profile/${type}`)
    }
}

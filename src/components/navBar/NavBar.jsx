import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import {NavBarContainer} from './StyledNavBar'

import back from 'images/back.png'


class NavBar extends Component {
    render() {
        return (
            <NavBarContainer  
                aligns={this.props.aligns} 
                colors={this.props.colors}>
                <div className="back" onClick={ ()=>{this.props.history.push('/index/profile')} } >
                    <img src={back} alt=""/>
                </div>
                <div className="content">{this.props.titleText}</div>
                <div className="stance"></div>
            </NavBarContainer>
        )
    }
}

export default withRouter(NavBar)
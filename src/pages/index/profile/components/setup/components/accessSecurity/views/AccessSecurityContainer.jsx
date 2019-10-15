import React, { Component } from 'react'
import AccessSecurityUi from './AccessSecurityUi'

export default class AccessSecurity extends Component {
    render() {
        return <AccessSecurityUi 
                changeRoute={this.changeRoute}
            />
    }
    changeRoute = (path)=>{
        this.props.history.push(path)
    }
}

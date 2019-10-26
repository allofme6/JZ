import React, { Component } from 'react'
import AccessSecurityUi from './AccessSecurityUi'
import connect from 'profile/store/connect'
import store from 'store'

@connect
class AccessSecurity extends Component {
    render() {
        return <AccessSecurityUi 
                changeRoute={this.changeRoute}
                handleClick={this.handleClick}
            />
    }
    changeRoute = (path)=>{
        this.props.history.push(path)
    }
    handleClick = async ()=>{
        let res = (await this.$post('/api/user/logout',{})).data
        if(res.code === 200){
            store.remove('userMessage')
            this.props.history.push('/login')
        }
    }   
}

export default AccessSecurity

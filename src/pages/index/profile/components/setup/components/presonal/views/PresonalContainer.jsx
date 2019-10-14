import React, { Component } from 'react';

import PresonalUI from './PresonalUI';

class PresonalContainer extends Component {
    state = {
        sex : '请选择',
        birthday: '请选择'
    }
    
    render() {
        return <PresonalUI 
        sex={this.state.sex} 
        handleClickSex={this.handleClickSex} 
        birthday={this.state.birthday}
        chooseBirthday={this.chooseBirthday}
        changeRoute={this.changeRoute}
        />
    }

    handleClickSex = (sex) => {
        this.setState({
            sex
        })
    }

    chooseBirthday = (time) => {
        let date = new Date(time)
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let birthday = `${year}年${month}月${day}日`
        this.setState({
            birthday
        })
    }

    changeRoute = (url) => {
        this.props.history.push(url)
    }
}

export default PresonalContainer;
import React, { Component } from 'react'
import PublishUi from './PublishUi'

export default class PublishContainer extends Component {
    render() {
        return (
            <PublishUi onBack={this.close}></PublishUi>
        )
    }

    close = () => {
        this.props.history.go(-1)
    }
}

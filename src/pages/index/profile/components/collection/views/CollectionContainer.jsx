import React, { Component } from 'react'

import CollectionUI from './CollectionUI'

import connect from 'profile/store/connect'

@connect
class Collection extends Component {
    state = {
        collectionList:[]
    }
    render() {
        return <CollectionUI
                collectionList = {this.state.collectionList}
            ></CollectionUI>
    }
    // async componentDidMount(){
    //     this.setState({
    //         collectionList: await this.props.loadCollection()
    //     })
    // }
}

export default Collection
import React, { Component } from 'react'

import CollectionUI from './CollectionUI'

import connect from 'profile/store/connect'

@connect
class Collection extends Component {
    state = {
        collectionList:[],
        listMessage:{},
        list:[]
    }
    render() {
        return <CollectionUI
                collectionList = {this.state.collectionList}
                handleAction= {this.handleAction}   
                list = {this.state.list}
                changeRout={this.changeRout}
            ></CollectionUI>
    }
    changeRout =(item)=>{
        this.props.history.push(`/articleDetail/${item.bolgId}`)
    }
    handleAction= async (value)=>{
        let res = (await this.$post('/api/showcollect',{
            uid: this.props.userMessage.userID.uId,
            bookid : value.bId
        })).data
        this.setState({
            list: res.data
        })
        this.props.history.push(this.props.match.path + '/list')
    }
    async componentDidMount(){
        let res = (await this.$post('/api/findbookmark',{
            uid: this.props.userMessage.userID.uId
        })).data
        this.setState({
            collectionList: res.data
        })
    }
}

export default Collection
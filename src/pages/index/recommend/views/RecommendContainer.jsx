import React, { Component } from 'react'
import RecommendUi from './RecommendUi'
import connect from './connect'

class RecommendContainer extends Component {
    state={
        articleList:[
        {
            imageUrl: 'https://img.haohaozhu.cn/App-imageShow/o_phone/887df21ji1xg0Yn00phwlo41q4z0?iv=1&w=1080&h=1351.3513513514',
            bolgId: '1',
            title: '谷仓门',
            collect: '666',
            users: {
                iconUrl: 'https://cn.bing.com/th?id=OIP.QNGmLsUJkqUpgMbYBMpPqQAAAA&pid=Api&rs=1',
                uname: '哈哈',

            }
        },
        {
            imageUrl: 'https://img.haohaozhu.cn/App-imageShow/o_phone/887df21ji1xg0Yn00phwlo41q4z0?iv=1&w=1080&h=1351.3513513514',
            bolgId: '1',
            title: '谷仓门',
            collect: '666',
            users: {
                iconUrl: 'https://cn.bing.com/th?id=OIP.QNGmLsUJkqUpgMbYBMpPqQAAAA&pid=Api&rs=1',
                uname: '哈哈',

            }
        }
    ],
    }
    render() {
        return (
            <RecommendUi 
            collectActive={this.props.collectActive}
            onClick={this.props.handleCollect} 
            onChangeClick={this.changeClick}
            articleList={this.state.articleList}
            handleCollect={this.state.handleCollect}
            >   
            </RecommendUi>
        )
    }
    changeClick = () => {
        this.props.history.push('/articleSearch')
    }
    async componentDidMount(){
        let result = await this.$get({
            url:"/api/findAllblog",
            params:{
              uid: "1"
            }
        })
        this.setState({
            articleList : result.data.data
        })
    }   
}

export default connect(RecommendContainer)
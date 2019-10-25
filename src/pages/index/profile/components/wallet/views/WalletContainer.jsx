import React, { Component } from 'react';

import WalletUI from './WalletUI';
import { ActionSheet } from 'antd-mobile'
import connect from 'profile/store/connect'

@connect
class WalletContainer extends Component {
    state = {
        balance: 0.00,
        QRcode : ''
    }
    render() {
        return (
            <WalletUI
                handleRecharge={this.handleRecharge}
                balance={this.state.balance}
            />
        );
    }
    componentDidMount(){
        this.handleSeek()
    }
    handleSeek = async ()=>{
        let res = (await this.$post('/api/user/findMoney',{
            userid: this.props.userMessage.userID.uId
        })).data
        this.setState({
            balance: res.data +'.00'
        })
    }
    handleRecharge= async ()=> {
        let data = (await this.$get({
            url: '/pay',
            params:{
                userid: this.props.userMessage.userID.uId
            }
        })).data
        console.log(data)
        const BUTTONS = [<img className="qrcode" src={data.image} alt="扫码支付"/>]
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            // cancelButtonIndex: BUTTONS.length - 1,
            maskClosable: true,
            'data-seed': 'logId',
        },
        () => {
            this.handleSeek()
        }
        )
    }
}


export default WalletContainer;
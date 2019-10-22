import React, { Component } from 'react';

import WalletUI from './WalletUI';
import { ActionSheet } from 'antd-mobile'
class WalletContainer extends Component {
    state = {
        balance: 0.00,
        QRcode : ''
    }
    render() {
        return (
            <WalletUI
                handleRecharge={this.handleRecharge}
            />
        );
    }
    handleRecharge= async ()=> {
        let data = (await this.$get({
            url: 'https://luckych.club/pay'
        })).data
        const BUTTONS = [<img className="qrcode" src={data.image}/>]
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            // cancelButtonIndex: BUTTONS.length - 1,
            maskClosable: true,
            'data-seed': 'logId',
        },
        () => {
            // 这里写查询接口
        })
    }
}


export default WalletContainer;
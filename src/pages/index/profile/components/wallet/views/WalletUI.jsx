import React from 'react';

import {WalletContainer,OptionStyle} from '../StyledWallet';
import NavBar from 'components/navBar/NavBar';


export default (props)=>{
    return (
        <WalletContainer>
            <OptionStyle />
            <NavBar
                titleText="钱包"
                aligns="center"
                colors="#000"
            />
            <div className="wallet-main">
                <div className="wallet-box">
                    <div className="wallet-title">余额</div>
                    <div className="wallet-count">0.00</div>
                </div>
                <div className="recharge" onClick={props.handleRecharge}>
                    充值
                </div>
            </div>
        </WalletContainer>
    )
}

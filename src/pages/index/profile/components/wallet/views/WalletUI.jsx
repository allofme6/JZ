import React, { Component } from 'react';

import {WalletContainer} from '../StyledWallet';
import NavBar from 'components/navBar/NavBar';


class WalletUI extends Component {
    render() {
        return (
            <WalletContainer>
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
                </div>
            </WalletContainer>
        );
    }
}

export default WalletUI;
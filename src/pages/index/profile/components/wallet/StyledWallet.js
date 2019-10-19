import styled , { createGlobalStyle } from 'styled-components'


const OptionStyle = createGlobalStyle`
    .am-action-sheet-button-list-item{
        height: 2rem !important;
        line-height: 2rem !important;
    }
`

const WalletContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    .qrcode{
        width: 1.48rem;
        height: 1.48rem;
    }
    .wallet-main{
        padding: .16rem .15rem;
        .wallet-box{
            width: 100%;
            height: 1.87rem;
            background-color: #0CC3C0;
            border-radius: .05rem;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            .wallet-title{
                height: .52rem;
                line-height: .52rem;
                font-size: .17rem;
                font-weight: 400;
            }
            .wallet-count{
                font-size: .8rem;
                line-height: 1.08rem;
                padding: 0 .06rem;
                border: .02rem  solid #fff;
                border-radius: .05rem;
            }
        }
        .recharge{
            margin-top: .1rem;
            width: 100%;
            height: .44rem;
            background-color: #0CC3C0;
            border-radius: .05rem;
            line-height: .44rem;
            text-align: center;
            font-size: .24rem;
            color: #fff;
            font-weight: 500;
        }
    }
`

export{
    WalletContainer,
    OptionStyle
}
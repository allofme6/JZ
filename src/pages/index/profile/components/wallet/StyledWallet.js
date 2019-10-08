import styled from 'styled-components'

const WalletContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
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
    }
`

export{
    WalletContainer
}
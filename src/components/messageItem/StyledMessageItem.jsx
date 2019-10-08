import styled from 'styled-components';

const MessageContainer = styled.div`
    width: 100%;
    padding-left: .15rem;
    height: .38rem;
    margin-bottom: ${props => props.msgText ? ".33rem" : ".08rem"};
    display: flex;
    align-items: center;
    .msg-card-img{
        width: .38rem;
        height: .38rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .content{
        font-size: .12rem;
        line-height: .17rem;
        color: #000;
        padding-left: .06rem;
        font-weight: 300;
        position: relative;
        .msg-text{
            height: .26rem;
            width: 1.65rem;
            display: flex;
            align-items: center;
            background-color: #86D1FF;
            border-radius: .13rem;
            padding-left: .06rem;
            position: absolute;
            top: .2rem;
            .mes-text-img{
                width: .18rem;
                height: .17rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .msg-text-main{
                padding-left: .03rem;
                font-size: .12rem;
                line-height: .17rem;
                color: #000;
                font-weight: 300;
            }
        }
    }
`



export{
    MessageContainer
}
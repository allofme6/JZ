import styled from 'styled-components'


const JoinContainer = styled.div`
    width: 100%;
    height : 100%;
    background: #fff;
    padding: .1rem .15rem 0 .15rem;
    .talk-head{
        positive: relative;
        width: 100%;
        height: .44rem;
        border-bottom: solid .01rem #B2A8A8;
        display: flex;
        flex-direction: row;
        .arrow{
            width: .2rem;
            height: .2rem;
            margin-top: .06rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .talk-btn{
            position: absolute;
            right: .15rem;
            span:first-of-type{
                display: inline-block;
                width: .6rem;
                height: .31rem;
                border: solid .01rem #55B4B4;
                border-radius: .15rem;
                text-align: center;
                line-height: .29rem;
                font-size: .12rem;
                color: #55B4B4;
            }
            span:last-of-type{
                display: inline-block;
                width: .6rem;
                height: .31rem;
                background: #55B4B4;
                border-radius: .15rem;
                text-align: center;
                line-height: .29rem;
                font-size: .12rem;
                color: #fff;
                margin-left: .21rem;
            }
        }
    }
    .talk-content{
        padding-top: .18rem;
        textarea{
            width: 100%;
            height: .6rem;
            resize: none;
            border: 0;
            color: #B5B3B3;
        }
        .talk-img{
            padding-top: .59rem;
            display: flex;
            flex-direction: row;
            span:nth-child(1){
                margin-right: .12rem;
                display: inline-block;
                width: 1rem;
                height: 1rem;
                position: relative;
                img{
                    width: 1rem;
                    height: 1rem;
                }
                .talkFalse{
                    width: .09rem;
                    height: .09rem;
                    background: #000;
                    position: absolute;
                    top: 0;
                    right: 0;
                    img{
                        width: .07rem;
                        height: .07rem;
                        position: relative;
                        top: -.08rem;
                        right: -.01rem;
                    }
                }
            }
            span:nth-child(2){
                display: inline-block;
                width: 1rem;
                height: 1rem;
                border: dotted .01rem #707070;
                img{
                    width: .5rem;
                    height: .5rem;
                    position: relative;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }
            }
        }
    }
   
        
   
`

export {
   JoinContainer
}
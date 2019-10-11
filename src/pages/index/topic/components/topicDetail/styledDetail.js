import styled from 'styled-components'

import detailHead from 'images/topic/detailHead.png'

const DetailContainer = styled.div`
    width: 100%;
    height : 100%;
    background: #fff;
    .detail-head{
        width: 100%;
        height: 1.8rem;
        background-image: url(${detailHead});
        background-size: 100% 1.8rem;
        .arrow{
            width: .2rem;
            height: .2rem;
            position: relative;
            left: .15rem;
            top: .12rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .title{
            color: #FFFFFF;
            position: relative;
            left: .25rem;
            top: .84rem;
            p:nth-child(1){
                font-size: .17rem;
                line-height: .24rem;
                padding-bottom: .1rem;
            }
            p:nth-child(2){
                font-size: .12rem;
                line-height: .17rem;
            }
        }
    }
    .instr{
        color: #707070;
        font-size: .12rem;
        padding: .26rem .26rem .23rem .26rem;
    }
    .space-line{
        width: 100%;
        height: .11rem;
        background: #F4F4F4;
    }
    .content{
        width: 100%;
        .talk{
            color: #333333;
            font-size: .14rem;
            font-weight: 800;
            margin: .16rem auto 0;
            padding-bottom: .1rem;
            width: 3.25rem;
            border-bottom: solid .01rem #B2A8A8;
        }
        .item{
            width: 3.25rem;
            margin: 0 auto;
            .person{
                display: flex;
                flex-directive: row;
                height: .5rem;
                margin-top: .2rem;
                .person-img{
                    line-height: .5rem;
                    img{
                        width:.38rem;
                        height: .38rem;
                    }
                }
                .person-message{
                    padding-left: .15rem;
                    p:nth-child(1){
                        color:#333;
                        font-size: .14rem;
                        font-weight: 800;
                        padding-bottom: .1rem;
                        line-height: .2rem;
                    }
                    p:nth-child(2){
                        color:#DDD;
                        font-size: .14rem;
                        height: .2rem;
                    }
                }
            }
            .context{
                color: #707070;
                font-size: .14rem;
                margin-top: .2rem;
            }
        }
    }
        
   
`

export {
    DetailContainer
}
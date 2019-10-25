import styled from 'styled-components'


const DetailContainer = styled.div`
    width: 100%;
    height : 100%;
    background: #fff;
    overflow-y: scroll;
    .detail-head{
        width: 100%;
        height: 1.8rem;
        background-size: 100% 1.8rem;
        .head-img{
            width: 100%;
            height: 1.8rem;
            position: absolute;
            top: 0;
        }
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
        padding: 0 .25rem;
        position: relative;
        .talk{
            color: #333333;
            font-size: .14rem;
            font-weight: 800;
            margin: .16rem auto 0;
            padding-bottom: .1rem;
            width: 100%;
            border-bottom: solid .01rem #B2A8A8;
        }
        .item{
            width: 100%;
            margin: 0 auto;
            padding: 0 
            .person{
                display: flex;
                flex-direction: row;
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
            .context-img{
                padding-top: .08rem;
                display: flex;
                flex-direction: row;
                img:nth-child(1){
                    width: .9rem;
                    height: .9rem;
                    padding-right: .1rem;
                }
                img:nth-child(2){
                    width: .9rem;
                    height: .9rem;
                }
            }
        }
        .join-review{
            position: relative;
            bottom: .15rem;
            margin: 0 auto;
            width: .87rem;
            height: .31rem;
            border-radius: .15rem;
            color: #fff;
            font-size: .12rem;
            line-height: .31rem;
            background: #55B4B4;
            img{
                width: .12rem;
                height: .11rem;
                margin: -.03rem .05rem 0 .12rem;
            }
        }
    }
        
   
`

export {
    DetailContainer
}
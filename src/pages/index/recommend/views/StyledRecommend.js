import styled from 'styled-components'   

const RecommendContainer = styled.div`
    background:#fff;
`
const TopContainer = styled.div`
    height:100%;
    ul{
        padding: 0 .28rem 0 .28rem;
        height: 100%;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        width:100%;
        li{
            margin-top:.22rem;
            width:1.47rem;
            img{
                width:100%;
                height:1.46rem;
            }
            p{
                font-size:.13rem;
                color:#707070;
                font-family:PingFang SC;
                margin-top:.12rem;
                width:1.43rem;
                text-align:left;
            }
            .banners{
                width:1.43rem;
                display:flex;
                justify-content:space-between;
                .imgs1{
                    >.touxiang{
                    /* margin-top:.17rem; */
                    width:.22rem;
                    height:.22rem;
                    border-radius:50%;
                    }
                >span{
                    display:inline-block;
                    font-size:.12rem;
                    color:#707070;
                    font-family:PingFang SC;
                    text-align:left;
                    margin-top: .2rem;
                    margin-left:.05rem;
                }
                }
                .imgs2{
                    >img:nth-last-of-type(1){
                    /* margin-top:.18rem; */
                    width:.22rem;
                    height:.22rem;
                    margin-left:.22rem;
                }
                >span{
                    display: inline-block;
                    font-size:.12rem;
                    color:#7D7D7D;
                    margin-left:.02rem;
                    margin-top:.21rem;
                    /* &.active{
                        color:#FFCC00;
                    } */
                }
                
            }             
        }
    }
}

`


export {
    RecommendContainer,
    TopContainer
}
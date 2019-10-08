import styled from 'styled-components'
   

const RecommendContainer = styled.div`
    background:#fff;
   
`
const TopContainer = styled.div`
    height:100%;
    ul{
        padding: 0 .28rem 0 .28rem;
        height: 100%;
        li{
            margin-top:.22rem;
            float: left;
            img{
                width:1.47rem;
                height:1.46rem;
            }
            p{
                font-size:.13rem;
                color:#707070;
                font-family:PingFang SC;
                margin-top:.12rem;
                width:1.43rem;
                height:.37rem;
                text-align:left;
            }
            .banners{
                width:1.43rem;
                display:flex;
                .touxiang{
                    margin-top:.17rem;
                    width:.22rem;
                    height:.22rem
                }
                span{
                    display:inline-block;
                    font-size:.12rem;
                    color:#707070;
                    font-family:PingFang SC;
                    text-align:left;
                    margin-top: .2rem;
                    margin-left:.05rem;
                }
                .collect{
                    margin-top:.18rem;
                    width:.22rem;
                    height:.22rem;
                    margin-left:.22rem;
                }
                .cNum{
                    margin-left:.02rem;
                    margin-top:.21rem
                }
            }
        }
        li:nth-child(2n){
           float:right
        }
}

`


export {
    RecommendContainer,
    TopContainer
}
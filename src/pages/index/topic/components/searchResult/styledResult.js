import styled from 'styled-components'

import searchImg from 'images/topic/searchImg.png'

const ResultContainer = styled.div`
    width: 100%;
    height : 100%;
    background: #fff;
    .result-head{
        width: 100%;
        height: 1.8rem;
        background-image: url(${searchImg});
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
    }
    .instr-wrap{
        padding: .19rem .24rem 0 .15rem;
        .instr{
            color: #707070;
            font-size: .14rem;
            height: .65rem;
            padding-right: .21rem;
            border-bottom: solid .01rem #B2A8A8;
        }
    }
 
    .content{
        width: 100%;
        padding: 0 .24rem 0 .15rem;
        position: relative;
        ul li{
            border-bottom: solid .01rem #B2A8A8;
            padding-bottom: .21rem; 
            .title{
                padding-top: .1rem;
                color: #55B4B4;
            }
            h1{
                font-size: .14rem;
                margin: .14rem 0 .16rem 0;
            }
            .sketch{
               font-size: .12rem;
               color: #707070;
            }
            .count{
                margin-top: .16rem;
                color: #A6A6A6;
                font-size: .1rem;
            }
        }
        
    }
        
   
`

export {
    ResultContainer
}
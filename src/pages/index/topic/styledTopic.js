import styled from 'styled-components'

const TopicContainer = styled.div`
    width: 100%;
    height : 100%;
    .topic-head{
        display: flex;
        flex-directive: row;
        padding: .07rem 0;
        .nav-arrow{
            width: .2rem;
            height: .2rem;
            margin: .05rem 0 0 .15rem;
            img{
                width: .2rem;
                height: .2rem;
            }
        }
        .TopicSearch{
            height: .3rem;
            width: 2.95rem;
            background: #DDDDDD;
            border-radius: .15rem;
            position: relative;
            margin-left: .15rem;
            img{
                width: .19rem;
                height: .19rem;
                margin: 0 0 .05rem .13rem;
            }
            input{
                font-size: .14rem;
                background: #DDDDDD;
                width: 80%;
                border: 0;
                height: 100%;
                padding-left: .06rem;
                line-height: .3rem;
            }
        }  
    }
    .imgNav{
        width: 100%;
        height: .6rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .content{
        width: 100%;
        display: flex;
        flex-directive: row;
        ul{
            width: .8rem;
            li{
                width: 100%;
                height: .7rem;
                font-size: .14rem;
                color: #707070;
                line-height: .7rem;
                text-align: center;
                i{
                    display: inline-block;
                    width: .08rem;
                    height: .7rem;
                    background: #8BC6C4;
                    position: absolute;
                    left: 0;
                    opacity: 0;
                }
                &.active{
                    color: #8BC6C4;
                    i{
                        opacity: 1;
                    }
                }
            }
        }
        .content-right{
            margin: 0 auto;
        }
    }
    
`

export {
    TopicContainer
}
import styled from 'styled-components'

const TopicContainer = styled.div`
    width: 100%;
    height : 100%;
    background: #fff;
    display: flex;
    flex-direction column;
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
            flex: 1;
            background: #DDDDDD;
            border-radius: .15rem;
            position: relative;
            margin: 0 .3rem 0 .15rem;
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
        height: 100%;
        display: flex;
        flex-direction: row;
        .classify-nav{
            flex: 16;
            height: 100%;
            background: #F4F4F4;
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
                    background: #FFFFFF;
                    i{
                        opacity: 1;
                    }
                }
            }
        }
        .content-right{
            flex: 59;
            height: 100%;
            overflow-y: scroll;
            ul{
                width: 100%;
                height: 100%;
                overflow: scroll;
                li{
                    width: 100%;
                    height: .7rem;
                    margin-top: .25rem;
                    padding-left: .27rem;
                    display: flex;
                    flex-direction:row;
                    img{
                        width: .7rem;
                        height: .7rem;
                    }
                    .content-texts{
                        padding:.07rem 0 .09rem .11rem;
                        p:nth-child(1){
                            color: #707070;
                            font-size: .14rem;
                            font-weight: 800;
                            padding-bottom: .15rem;
                        }
                        p:nth-child(2){
                            color: #707070;
                            font-size: .12rem;
                        }
                    }
                }
            }
            
        }
    }
    
`
const TopicBody = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
`

export {
    TopicContainer,
    TopicBody
}
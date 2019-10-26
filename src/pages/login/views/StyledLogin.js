import styled from 'styled-components'
import border from 'components/styled/border'


const LiContainer = border({
    width:'0 0 1px 0',
    color:'#fff',
    comp:styled.li``
})
const LoginContainer = styled.div `
    width:100%;
    height:100%;
    background-image:url('https://luckych.club/login/register_background.png');
    background-repeat:no-repeat;
    background-size:100% auto;
    display:flex;
    flex-direction:column;
    align-item:center;
    position:relative;
    >div{
        width:100%;
        height:100%;
        position:absolute;
        z-index:10;
        background:rgba(20,15,15,.28);
        header{
            padding:1.17rem 1.27rem .69rem
            >div{
                font-size:.3rem;
                color:#fff;
                width:100%;
                height:.42rem;
                text-align:center;
                line-height:.42rem;
                font-weight:300;
            }
        }
        main{
            padding:0 .61rem;
            ul{
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                li{
                    width:100%;
                    height:.4rem;
                    >div{
                        width:100%;
                        height:.4rem;
                        display:flex;
                        justify-content:flex-start;
                        div{
                            width:.5rem;
                            padding-right:.16rem;
                            padding-bottom:.05rem;
                           img{
                            display:block;
                            width:.34rem;
                            height:.34rem;
                           }
                            
                        }
                        input{
                            flex:1
                            margin: .19rem 0 .07rem 0;
                            height: .14rem;
                            font-size: .12rem;
                            color: #fcfafa;
                            background:transparent;
                            border:none;
                            ::-webkit-input-placeholder { /* WebKit browsers */
                                color: #ccc;
                                letter-spacing:.01rem;
                                font-size: .12rem;
                              }
                              
                              ::-moz-placeholder { /* Mozilla Firefox 19+ */
                                color: #ccc;
                                letter-spacing:.01rem;
                                font-size: .12rem;
                              }
                              
                              :-ms-input-placeholder { /* Internet Explorer 10+ */
                                color: #ccc;
                                letter-spacing:.01rem;
                                font-size: .12rem
                              }   
                        }
                    }
                }
                li:nth-of-type(2){
                    margin-top:.28rem;
                    margin-bottom:.16rem
                    >div{
                        p{
                            width:.64rem;
                            height:.25rem;
                            margin-right:.03rem;
                            margin-bottom:.05rem;
                            margin-top:.09rem;
                            background:rgba(255,255,255,.38);
                            color:#ccc;
                            font-size:.12rem;
                            text-align:center;
                            line-height:.25rem;
                        }
                    }
                }
            }
            >div.sure{
                width:100%;
                height:.36rem;
                border-radius:.05rem;
                background:#65A39B;
                font-size:.15rem;
                text-align:center;
                line-height:.36rem;
                color:#fff;
            }
            .forget{
                float:right;
                height:.14rem;
                font-size:.12rem;
                line-height:.14rem;
                color:#ccc;
                text-align:right;
                margin-top:.02rem
            }
        }
        footer{
            position:absolute;
            top:6.15rem;
            width:100%;
            ul{
                display:flex;
                justify-content:center;
                align-items:center;
                padding:0 .67rem
                li{
                    flex:1;
                    font-size:.18rem;
                    color:#fcfafa;
                    text-align:center;
                    font-weight:300
                }
                li.active{
                    color:#00A08B;
                }
            }
        }
    }
    
    
`
export {LoginContainer,LiContainer}
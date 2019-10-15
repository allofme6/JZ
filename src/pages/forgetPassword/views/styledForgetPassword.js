import styled from 'styled-components'

const ForgetPasswordContainer = styled.div`
    width:100%;
    height:100%;
    background-image:url('./register_background.png');
    background-repeat:no-repeat;
    background-size:100% 100%;
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
        ul{
            margin-top:.27rem
            width:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            li{
                height:.57rem;
                width:100%;
                padding-left:.47rem;
                display:flex;
                justify-content:flex-start;
                align-items:center;
                background:rgba(255,255,255,.2);
                margin-bottom:.3rem;
                a{
                    flex:1
                    font-size:.14rem;
                    color:#241D1D !important;
                }
                
            }
        }
    }
`
export {ForgetPasswordContainer}
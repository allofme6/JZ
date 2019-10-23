import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        font-size:26.67vw;
        body{
            #zmageControl{
                width:.2rem;
                height:.2rem;
                #zmageControlClose{
                    width:.2rem;
                    height:.2rem;
                    color:#000;
                    svg{
                        width:.2rem;
                        height:.2rem; 
                        box-sizing:content-box;
                        margin-left:-3.1rem;
                        margin-top:-.5rem
                    }
                }
            }
            .am-toast>span {
                max-width: 50%;
                position: fixed !important;
                bottom: .66rem !important; 
                .am-toast-text{
                    width:1.12rem;
                    height:.46rem;
                    background-color:rgba(20,15,15,.28);
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    >div{
                        color:#fff;
                    }
                }
            }
        }
    }
`

export {
    GlobalStyle
}
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 26.67vw;
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
`

export {
    GlobalStyle
}
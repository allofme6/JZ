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
        }
    }

`

export {
    GlobalStyle
}
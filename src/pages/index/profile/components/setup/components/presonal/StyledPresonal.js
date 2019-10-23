import styled , { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    .am-picker-popup {
        bottom: 2.65rem !important;
        padding: 0 .31rem !important; 
        background: rgba(123 , 0 , 0 , 0) !important;
    }
    .am-picker-popup-body {
        background: #fff !important; 
    }
    .am-picker-popup-item.am-picker-popup-header-right {
        color: #000;
    }
    .am-picker-popup-item.am-picker-popup-header-left {
        color: #000;
    }
`

const PresonalContainer = styled.div`
    width: 100%;
    height: 100%;
    #file{
        opacity: 0;
        height: 100%;
        display: inline-block;
        position: absolute;
    }
    .inputs{
        display:flex;
        align-items: center;
        position: relative;
        span{
            flex-shrink: 0;
        }
    }
    .options-list{
        width: 100%;
    }
    .chooseCard{
        width: .31rem;
        height: .31rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .choose {
        font-size: .17rem;
        color: #000;
    }
    .text{
        width: 100%;
        position: absolute;
        z-index: 1;
        >a{
            display: inline-block;
            text-align: left;
            width: 100%;
            z-index: 0 !important;
            background-color: transparent;
            &::before{
                border: 0 !important;
            }
            >span{
                letter-spacing: -.03rem;
            }
        }
    }
    .middle{
        >div{
            z-index: 0 !important;
            position: relative !important;
            font-size: .17rem !important;
            color: #000;
        }
    }
`
// const ChooseButton = styled.div`
//     .am-button::before {
//         height: 0 !important;
//         border: none !important;
//     }
//     .am-button span {
//         font-size: .17rem !important;
//         color: #000;
//     }
// `
const ChooseDate = styled.div`
    .choose-date {
        font-size: .17rem !important;
        color: #000;
    }
`

export {
    GlobalStyle,
    PresonalContainer,
    ChooseDate
}
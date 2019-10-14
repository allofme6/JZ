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
    .options-list{
        width: 100%;
    }
    .choose {
        font-size: .17rem;
        color: #000;
    }
`
const ChooseButton = styled.div`
    .am-button::before {
        height: 0 !important;
        border: none !important;
    }
    .am-button span {
        font-size: .17rem !important;
        color: #000;
    }
`
const ChooseDate = styled.div`
    .choose-date {
        font-size: .17rem !important;
        color: #000;
    }
`

export {
    GlobalStyle,
    PresonalContainer,
    ChooseButton,
    ChooseDate
}
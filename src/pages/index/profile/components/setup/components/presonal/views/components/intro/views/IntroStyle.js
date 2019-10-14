import styled from 'styled-components'

const IntroContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    
`

const TextareaStyle = styled.div`
    .am-list-header {
        display: none;
    }
    .am-list-body::before {
        height: 0 !important;
    }
    .am-list-body::after {
        height: 0 !important;
    }
    .am-list .am-list-item.am-textarea-item {
        height: 100% !important;
    }
`

export {
    IntroContainerStyle,
    TextareaStyle
}
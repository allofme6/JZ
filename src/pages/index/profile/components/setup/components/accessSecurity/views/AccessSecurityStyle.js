import styled from 'styled-components'

const OptionStyle = styled.div`
    .am-button {
        &::before {
            height: 0 !important;
            border: none !important;
        }
        span {
            font-size: .17rem !important;
        }
    }
`

export {
    OptionStyle
}
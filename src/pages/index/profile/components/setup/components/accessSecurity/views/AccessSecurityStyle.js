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
    .text{
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        a{
            width: 100%;
            display: inline-block;
            text-align: left;
        }
    }
`

export {
    OptionStyle
}
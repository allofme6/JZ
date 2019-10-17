import styled from 'styled-components'
import border from 'components/styled/border'

const ChangePhoneContainer = styled.div`
    .am-button {
        line-height: .26rem !important;
        height: auto;
        &::before {
            height: 0 !important;
            border: 0 !important;
        }
        span {
            font-size: .14rem;
        }
    }

    .stance {
        color: green;
        font-size: .14rem;
        height: .27rem;
    }
    .Verify {
        padding: 0 .15rem;
        h2 {
            padding: .25rem 0 .1rem 0;
            font-size: .2rem;
            font-weight: 500;
        }
        
    }
`
const InputStyle = styled.div`
    padding: .1rem 0;
    input {
        display: block;
        border: none;
        margin-top: .1rem;
        width: 100%;
        height: 100%;
    }
`

const InputBorderStyle = border({
    width: '0 0 1px 0',
    comp: InputStyle
})

export {
    ChangePhoneContainer,
    InputBorderStyle
}
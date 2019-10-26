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
const Signout = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: .5rem;
    div{
        height: .55rem;
        width: 80%;
        line-height: .55rem;
        text-align: center;
        font-size: .2rem;
        background-color: #FF6633;
        color: #fff;
        border-radius: .1rem;
    }
`

export {
    OptionStyle,
    Signout
}
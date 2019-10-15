import styled from 'styled-components'

import border from 'components/styled/border'

const ChangePwContainer = styled.div`
    width: 100%;
    height: 100%;
    h3{
        font-size: .18rem;
        padding: .17rem 0 0 .15rem;
        font-weight: 400;
    }
    .inputList{
        width: 100%;
        padding: 0 .15rem;
        margin-top: .18rem;
        input{
            border: 0;
            height: .45rem;
            width: 100%;
            font-size: .13rem;
        }
    }
    .submit{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: .34rem;
        >div{
            font-size: .18rem;
            width: 83.47%;
            background-color: #6ACCC9;
            opacity: ${
                (props)=>{return props.isBtnClick ? 1 : 0.5}
            };
            height: .53rem;
            line-height: .53rem;
            text-align: center;
            color: #fff;
            font-weight: 800;
            border-radius: .05rem;
        }
    }
`

const Input = border({
    width: '0 0 1px 0',
    comp: styled.div`
        width: 100%;
    `
})

export{
    ChangePwContainer,
    Input
}
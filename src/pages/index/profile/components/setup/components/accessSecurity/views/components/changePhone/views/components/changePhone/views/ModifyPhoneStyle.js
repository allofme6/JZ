import styled from 'styled-components'
import border from 'components/styled/border'

const ModifyPhoneContainer = styled.div`
    width: 100%;
    height: 100%;
    .ChangeBindPhone {
        padding: 0 .15rem;
        h2 {
            padding: .25rem 0 .1rem 0;
            font-size: .24rem;
            font-weight: 500;
        }
        .inputBox {
            .phoneNumber {
                display: flex;
            }
            .problem {
                text-align: right;
                font-size: .13rem;
            }
            .submit {
                height: .35rem;
                background: ${props => props.loginButton === 'false' ? 'rgb(171,226,225)' : 'rgb(45,183,181)'};
                border-radius: .04rem;
                margin-top: .25rem;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
            }
        }
    }
`

const AreaCodeStyle = styled.div`
    margin-right: .2rem;
    .AreaCode {
        width: .3rem;
        padding: .1rem 0;
    }
`

const InputPhoneStyle = styled.div`
    flex: 1;
    input {
        border: none;
        height: 100%;
        width: 100%;
    }
`
const InputPwdStyle = styled.div`
    margin-bottom: .14rem;
    .Verification-Code {
        display: flex;
        margin-top: .12rem;
        align-items: center;
        input {
            flex: 1;
            border: none;
            padding: .12rem 0;
        }
        p {
            width: .7rem;
            height: .28rem;
            font-size: .12rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            background: ${props => props.sendmessage === 'false' ? 'rgb(171,226,225)' : 'rgb(45,183,181)'};
            border-radius: .03rem;
            .am-button {
                font-size: .12rem;
                background: none;
                color: #fff;
                &::before {
                    height: 0 !important;
                }
            }
        }
    }
`

const InputPhoneBorde = border({
    width: '0 0 1px 0',
    comp: InputPhoneStyle
})

const AreaCodeBorder = border({
    width: '0 0 1px 0',
    comp: AreaCodeStyle
})

const InputPwdBorder = border({
    width: '0 0 1px 0',
    comp: InputPwdStyle
})

export {
    ModifyPhoneContainer,
    AreaCodeBorder,
    InputPhoneBorde,
    InputPwdBorder
}
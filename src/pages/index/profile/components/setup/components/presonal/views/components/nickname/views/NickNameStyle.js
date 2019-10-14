import styled from 'styled-components'
import border from 'components/styled/border'

const InputBoxStyle = styled.div`
    margin-top: .65rem;
    input {
        border: none;
        margin: 0 .15rem;
        font-size: .17rem;
    }
`

const ReminderStyle = styled.div`
    font-size: .13rem;
    margin: .11rem .15rem 0;    
`

const BorderReminderStyle = border({
    comp: ReminderStyle,
    width: '1px 0 0 0'
})

export {
    InputBoxStyle,
    BorderReminderStyle
}
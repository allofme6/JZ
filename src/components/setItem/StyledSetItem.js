import styled from 'styled-components'

import border from 'components/styled/border'

const SetContainer = styled.div`
    width: 100%;
    height: .5rem;
    padding: 0 .11rem 0 .16rem;
`
const ItemWrapper = border({
    width: '0 0 1px 0',
    color:'#B2A8A8',
    comp: styled.div`
        height: 100%;
        display: flex;
        align-items: center;
        .text{
            font-size: .17rem;
            color: #000;
        }
        .middle{
            flex: 1;
            height: 100%;
            display:flex;
            padding-right: .1rem;
            justify-content:flex-end;
            align-items: center;
        }
        .forward{
            z-index: 1;
            img{
                width: .13rem;
                height: .13rem;
            }
        }
    `
})
export{
    SetContainer,
    ItemWrapper
}
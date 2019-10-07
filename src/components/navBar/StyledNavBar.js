import styled from 'styled-components'

const NavBarContainer = styled.div`
    width: 100%;
    height: .48rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .back,.stance{
        width: .2rem;
        height: .2rem;
        img{
            width: 100%;
        }
    }
    .content{
        flex: 1;
        padding: 0 .06rem;
        line-height: .48rem;
        font-size: .17rem;
        color: ${props => props.colors};
        font-weight: 400;
        letter-spacing: .01rem;
        text-align: ${props => props.aligns};
    }
`

export{
    NavBarContainer
}
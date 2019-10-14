import styled from 'styled-components'

const NavBarContainer = styled.div`
    width: 100%;
    height: .48rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .back,.stance{
        height: .2rem;
        z-index: 1;
        img{
            width: .2rem;
            height: 100%;
        }
    }
    .stance{
        padding-right: .15rem;
        font-size: .17rem;
        line-height: 100%;
    }
    .content{
        position: absolute;
        width: 100%;
        padding-left: .26rem;
        line-height: .48rem;
        font-size: .17rem;
        color: ${props => props.colors};
        font-weight: 400;
        letter-spacing: .01rem;
        text-align: ${props => props.aligns};
        z-index: 0;
    }
`

export{
    NavBarContainer
}
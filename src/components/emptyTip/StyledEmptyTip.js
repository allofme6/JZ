import styled from "styled-components"

const EmptyTipContainer = styled.div`
    .bear{
        width: 1.68rem;
        height: 1.43rem;
        position: absolute;
        /* top: .59rem;
        left: .93rem; */
        ${props => props.bearPosition}
        img{
            width: 100%;
            height: 100%;
        }
    }
    .empty-tips{
        font-size: .12rem;
        line-height: .17rem;
        width: 100%;
        text-align: center;
        position: absolute;
        ${props => props.tipPosition}
        color: #000;
        font-weight: 300;
    }
    .actions{
        font-size: .17rem;
        width: 100%;
        position: absolute;
        ${props => props.actionPosition}
        text-align: center;
        line-height: .24rem;
        img{
            width: .19rem;
            height: .24rem;
            margin-left: .06rem;
        }
    }
`

export{
    EmptyTipContainer
}
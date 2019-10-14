import styled from 'styled-components'

const CardContainer = styled.div`
        display: flex;
        justify-content: center;
    .card-img-box{
        position: absolute;
        top: ${props => props.top};
        left: ${props => props.left};
        height: 1.17rem;
        width: 1.17rem;
        padding: .07rem .08rem .08rem .07rem;
        background-color: #fff;
        border-radius: 50%;
        img{
            width: 1.03rem;
            height: 1.03rem;
            background-color: #fff;
            border-radius: 50%;
        }
    }
`
export{
    CardContainer
}
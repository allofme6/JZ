import styled from "styled-components"

const ItemContainer = styled.div`
    width: 100%;
    padding: 0 .15rem;
    margin-bottom: .05rem;
    .item-box{
        padding: .03rem .06rem .08rem .07rem;
        box-shadow:0px 2px 3px rgba(0,0,0,0.16);
        .item-content{
            color: #828282;
            font-size: .12rem;
            line-height: .17rem;
        }
        .item-img{
            margin-top: .03rem;
            width: 1.24rem;
            height: .93rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
`

export{ItemContainer}
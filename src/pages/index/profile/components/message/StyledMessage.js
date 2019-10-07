import styled from 'styled-components'
import myBorder from 'components/styled/border'

const MessageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    .navList{
        padding-top: .02rem;
        height: .36rem;
        display: flex;
        justify-content: center;
    }
`

const NavBox = myBorder({
    width:"1px",
    color:"#707070",
    radius:34,
    comp: styled.span`
        display: inline-block;
        height: .34rem
        span{
            font-size: .13rem;
            width: 1.23rem;
            text-align: center;
            display: inline-block;
            color: #333;
            height: .34rem;
            line-height: .34rem;
            position: relative;
        }
        img{
            width: .11rem;
            height: .11rem;
            position: absolute;
            z-index: 1;
            top: 0;
        }
        .comment{
            border-radius: 0 34px 34px 0;
            img{
                right: 0;
            }
        }
        .agree{
            border-radius: 34px 0px 0px 34px;
            img{
                left: 0;
            }      
        }
        .active{
            background-color: #0CC3C0;
        }
    `
})

export{
    MessageContainer,
    NavBox
}
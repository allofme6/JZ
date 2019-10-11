import styled , { createGlobalStyle } from 'styled-components'
import border from 'components/styled/border'

const GlobalStyle = createGlobalStyle`
    .am-wingblank.am-wingblank-lg {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
    .am-image-picker-list {
        padding: .09rem .15rem 0 !important;
    }
`

const PublishMainContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    .publish-inputBox {
        padding: .17rem .15rem 0;
        height: .97rem;
        textarea {
            width: 100%;
            height: 100%;
            border: none;
            font-size: .14rem;
            color: #333;
            &::-webkit-input-placeholder {
                color: #B5B3B3;
                font-size: .14rem
            }
        }
    }
    
`

const NavBarContainer = styled.div`
    height: .48rem;
    display: flex;
    justify-content: space-between;
    padding: 0 .15rem;
    .publish-back {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: .2rem;
        }
    }
    .publish-operation {
        display: flex;
        justify-content: center;
        align-items: center;
        .publish-drafts {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: .21rem;
            width: .6rem;
            height: .31rem;
            background: #fff;
            border: 1px solid rgba(85,180,180,1);
            border-radius: .15rem;
            font-size: .12rem;
            color: #55B4B4;
        }
        .publish-save {
            display: flex;
            justify-content: center;
            align-items: center;
            width: .6rem;
            height: .31rem;
            background: #55B4B4;
            border: 1px solid rgba(85,180,180,1);
            border-radius: .15rem;
            font-size: .12rem;
            color: #fff;
        }
    }
`
const NavBarBorderContainer = border({
    comp: NavBarContainer,
    width: '0 0 1px 0'
})

export {
    GlobalStyle,
    PublishMainContainer,
    NavBarContainer,
    NavBarBorderContainer
}
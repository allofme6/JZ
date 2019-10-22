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
    .am-button {
        border: 1px solid rgba(85,180,180,1) !important;
        width: .6rem !important;
        font-size: .12rem !important;
        height: .47rem !important;
        line-height: .3rem !important;
        color: #55B4B4 !important;
        border-radius: .15rem !important;
        height: .31rem !important;
        border: 1px solid rgba(85,180,180,1) !important;
    }
    .am-modal-button {
        font-size: .15rem !important;
    }
    .am-modal-button-group-h .am-modal-button:first-child {
        color: #CC494F !important;
    }
    .am-modal-button-group-h .am-modal-button:nth-child(2) {
        color: #171717 !important;
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
            resize: none;
            border: none;
            font-size: .14rem;
            color: #333;
            &::-webkit-input-placeholder {
                color: #B5B3B3;
                font-size: .14rem
            }
        }
    }
    .imgWarp {
        display: flex;
        flex-flow: wrap;
        padding: 0 .15rem;
        .chooseImage {
            position: relative;
            border: 1PX solid #ddd;
            width: .85rem;
            height: .85rem;
            &::before {
                width: 1PX;
                height: 25px;
                content: " ";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: #ccc;
            }
            &::after {
                width: .25rem;
                height: 1PX;
                content: " ";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: #ccc;
            }
            input {
                width: 100%;
                height: 100%;
                display: block; 
                opacity: 0;
                position: absolute;
                z-index: 5;
            }
        }
        .imgBox {
            width: .85rem;
            height: .85rem;
            overflow: hidden;
            margin: 0 .04rem;
            border-radius: .03rem;
            margin-bottom: .05rem;
            position: relative;
            .icon {
                width: 15px;
                height: 15px;
                position: absolute;
                right: 6px;
                top: 6px;
                text-align: right;
                vertical-align: top;
                z-index: 2;
                background-size: 15px auto;
                background-image: url("data:image/svg+xml;charset=utf-8,<svg%20width%3D'16'%20height%3D'16'%20viewBox%3D'0%200%2016%2016'%20version%3D'1.1'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'><g%20id%3D'Page-1'%20stroke%3D'none'%20stroke-width%3D'1'%20fill%3D'none'%20fill-rule%3D'evenodd'><circle%20id%3D'Oval-98'%20fill-opacity%3D'0.4'%20fill%3D'%23404040'%20cx%3D'8'%20cy%3D'8'%20r%3D'8'><%2Fcircle><path%20d%3D'M11.8979743%2C11.8990375%20L11.8979743%2C11.8990375%20C11.7633757%2C12.0336542%2011.5447877%2C12.0336542%2011.4101891%2C11.8990375%20L8%2C8.48838931%20L4.5887341%2C11.8990375%20C4.45413554%2C12.0336542%204.23554748%2C12.0336542%204.10094892%2C11.8990375%20L4.10094892%2C11.8990375%20C3.96635036%2C11.7644208%203.96635036%2C11.5458033%204.10094892%2C11.4111866%20L7.51221482%2C8.00053847%20L4.10202571%2C4.58881335%20C3.96742715%2C4.45419667%203.96742715%2C4.23557919%204.10202571%2C4.10096251%20L4.10202571%2C4.10096251%20C4.23662427%2C3.96634583%204.45521233%2C3.96634583%204.58981089%2C4.10096251%20L8%2C7.51268762%20L11.4112659%2C4.10203944%20C11.5458645%2C3.96742276%2011.7644525%2C3.96742276%2011.8990511%2C4.10203944%20L11.8990511%2C4.10203944%20C12.0336496%2C4.23665612%2012.0336496%2C4.45527361%2011.8990511%2C4.58989029%20L8.48778518%2C8.00053847%20L11.8979743%2C11.4122636%20C12.0325729%2C11.5468803%2012.0325729%2C11.7644208%2011.8979743%2C11.8990375%20L11.8979743%2C11.8990375%20Z'%20id%3D'Shape'%20fill%3D'%23FFFFFF'%20transform%3D'translate(8.000000%2C%208.000000)%20scale(1%2C%20-1)%20translate(-8.000000%2C%20-8.000000)%20'><%2Fpath><%2Fg><%2Fsvg>");
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
            /* width: .6rem;
            height: .31rem;
            background: #fff;
            border: 1px solid rgba(85,180,180,1);
            border-radius: .15rem;
            font-size: .12rem;
            color: #55B4B4; */
            .am-button {
                border: 1px solid rgba(85,180,180,1) !important;
                width: .6rem !important;
                font-size: .12rem !important;
                height: .47rem !important;
                line-height: .3rem !important;
                color: #55B4B4 !important;
                border-radius: .15rem !important;
                height: .31rem !important;
                border: 1px solid rgba(85,180,180,1) !important;
            }
        }
        .publish-save {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #55B4B4;
            border-radius: .15rem;
            width: .6rem;
            height: .31rem;
            border: 1px solid rgba(85,180,180,1);
            border-radius: .15rem;
            font-size: .12rem;
            color: #fff;
        }
        .am-modal-button-group-h.am-modal-button-group-normal {
            font-size: .15rem !important;
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
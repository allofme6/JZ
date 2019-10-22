import styled , { createGlobalStyle } from 'styled-components'

const OptionStyle = createGlobalStyle`
    .am-action-sheet.am-action-sheet-normal {
        border-radius: .15rem .15rem 0 0;
    }
    .am-action-sheet-button-list .am-action-sheet-button-list-item::before {
        top: auto !important;
        bottom: 0 !important;
    }
`

const PublishContainer = styled.div`
    height: 100%;
    .publish-container {
        height: 100%;
        background: #34CAB9;
        .publish-jiazhuang {
            position: absolute;
            top: 2.19rem;
            left: 1.69rem;
            font-size: .16rem;
            font-weight: 500;
            /* line-height: .45rem; */
            color: #fff;
        }
        .publish-word {
            font-size: .23rem;
            color: #362940;
            font-weight: 600;
            /* line-height: .32rem; */
            position: absolute;
            top: 2.47rem;
            left: 1.69rem;
        }
        .publish-houseicon {
            position: absolute;
            left: .15rem;
            top: 1.38rem
            img {
                width: 1.56rem;
            }
        }
        .publish-closebg {
            position: absolute;
            top: 6.17rem;
            left: 1.68rem;
            img {
                width: .4rem;
            }
        }
        .publish-close {
            position: absolute;
            top: 6.25rem;
            left: 1.81rem;
            img {
                width: .13rem;
            }
        }
        .pulish-camerabg {
            position: absolute;
            top: 4.12rem;
            left: 1.54rem;
            img {
                width: .68rem;
            }
            
        }
        .publish-camera {
            position: absolute;
            top: 4.25rem;
            left: 1.67rem;
            img {
                width: .41rem;
            }
            input {
                position: absolute;
                height: .4rem;
                width: .4rem;
                opacity: 0;
            }
        }
    }
`

export {
    PublishContainer,
    OptionStyle
}
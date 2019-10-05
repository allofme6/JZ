import styled from 'styled-components'

const IndexContainer = styled.div`
    background: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    main {
        flex: 1;
    }
    footer {
        height: .48rem;
        .tabBar {
            height: 100%;
            display: flex;
            background:rgba(255,255,255,1);
            border:1px solid rgba(112,112,112,1);
            box-shadow:1px 3px 6px rgba(0,0,0,0.16);
            li {
                flex: 1;
                display: flex;
                img {
                    width: .2rem;
                    height: .2rem;
                    margin-top: .03rem;
                    margin-bottom: .05rem;
                }
                a {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: .12rem;
                    font-family: PingFang SC;
                    font-weight: 400;
                    line-height: .16rem;
                    color: rgba(130,130,130,1);
                    opacity: 1;
                }
            }
        }
    }
`
export {
    IndexContainer
}
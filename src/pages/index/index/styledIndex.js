import styled from 'styled-components'
import border from 'components/styled/border'

const TableBorder = border({
    width: '1px 0 0 0',
    comp: styled.ul`
            height: 100%;
            display: flex;
            background:rgba(255,255,255,1);
            box-shadow:1px 3px 6px rgba(0,0,0,0.16);
            li {
                flex: 1;
                display: flex;
                img {
                    width: 20px;
                    height: 20px;
                    margin-top: 3px;
                    margin-bottom: 5px;
                }
                a {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 12px;
                    font-family: PingFang SC;
                    font-weight: 400;
                    line-height: 16px;
                    color: rgba(130,130,130,1);
                    opacity: 1;
                }
            }
    `
})


const IndexContainer = styled.div`
    background: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    main {
        flex: 1;
        overflow-y: scroll;
    }
    footer {
        height: 48px;
        
    }
`
export {
    IndexContainer,
    TableBorder
}
import styled from 'styled-components'

const RecordContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: relative;
    .record-list{
        width: 100%;
        padding: 0 .15rem;
        .list-box{
            ul{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                li{
                    width: 1.68rem;
                    height: 1.36rem;
                    background-color: red;
                    margin-bottom:.1rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
`

export{
    RecordContainer
}
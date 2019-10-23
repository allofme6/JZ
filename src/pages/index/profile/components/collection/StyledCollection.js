import styled from "styled-components"

const CollectionContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: relative;
    .collection-wrapper{
        width: 100%;
        padding: 0.15rem;
        >ul{
            width: 100%;
            li{
                display: flex;
                height: 1.2rem;
                margin-bottom: .1rem;
                img{
                    width: 1.24rem;
                    border-radius: .08rem;
                }
                .collection-tiele{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding-left: .1rem;
                    .title{
                        font-size: .18rem;
                        color: #000;
                    }
                    .count{
                        font-size: .14rem;
                        opacity: 0.8;
                    }
                }
            }
        }
    }
`
export{
    CollectionContainer
}
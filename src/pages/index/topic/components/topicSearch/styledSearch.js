import styled from 'styled-components'

const SearchContainer = styled.div`
    width: 100%;
    height : 100%;
    background: #fff;
    .topic-head{
        display: flex;
        flex-directive: row;
        padding: .07rem 0;
        .nav-arrow{
            width: .2rem;
            height: .2rem;
            margin: .05rem 0 0 .15rem;
            img{
                width: .2rem;
                height: .2rem;
            }
        }
        .TopicSearch{
            height: .3rem;
            width: 2.71rem;
            background: #DDDDDD;
            border-radius: .15rem;
            position: relative;
            margin-left: .15rem;
            img{
                width: .19rem;
                height: .19rem;
                margin: 0 0 .05rem .13rem;
            }
            input{
                font-size: .14rem;
                background: #DDDDDD;
                width: 80%;
                border: 0;
                height: 100%;
                padding-left: .06rem;
                line-height: .3rem;
            }
        } 
        .search-word{
            font-size: .12rem;
            color: #666;
            line-height: .3rem;
            padding-left: .15rem;
        }
    }
    .keyword{
        position: absolute;
        bottom: 0;
        img{
            width: 100%;
            height: 2.16rem;
        }
    } 
   
`

export {
    SearchContainer
}
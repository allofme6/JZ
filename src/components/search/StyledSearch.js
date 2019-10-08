import styled from 'styled-components'

import iconStyled from 'components/styled/icons.js'

const SearchContainer = iconStyled(
  styled.div`
    padding: .12rem .15rem 0 .15rem;
    height: .30rem;
    box-sizing:content-box;
    display:flex;
    align-items: center;
    justify-content: center;
    div{
      width:100%;
      height:100%;
      display:flex;
      background:#E4E4E4;
      border-radius:.15rem;
      i{
        font-family: 'iconfont';
        color:#000000;
        font-size:.19rem;
        padding-left:.13rem;
      }
      input{
        width:100%;
        height:100%;
        border:0;
        background:#E4E4E4;
        border-radius:.15rem;
        padding-left:.10rem;
        font-size:.14rem;
        color:#707070;
      }
    }
    
  `
)

export{
  SearchContainer
}

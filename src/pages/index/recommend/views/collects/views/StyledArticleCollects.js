import styled from 'styled-components'

import border from 'components/styled/border.js'


const ArticleCollectsContainer = styled.div`
  .collects{
    height:100%;
    .am-navbar {
      .am-navbar-title{
        padding-right:1.4rem
      }
    }
    .slider{
      width:100%;
      height:.09rem;
      color:#ECEBEB;
      z-index:122;
    }
    .one{
      background:#fff;
      width:100%;
      padding:.11rem 0 .08rem.12rem;
      >input{
        border:0;
        color:#9D9D9D;
        font-size:.17rem
      }
    }
    .three{
      >textarea{
        border:0;
        color:#9D9D9D;
        font-size:.17rem
      }
    }
  }
  /* .two{
    height:5.33rem;
    background:#ffffff;
  } */

`
const BorderContainer = border({
  color:"#707070",
  comp:styled.ol`
  `
})

export {
  ArticleCollectsContainer,
  BorderContainer
}
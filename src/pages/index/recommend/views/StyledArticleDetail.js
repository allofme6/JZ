import styled from 'styled-components'

import border from 'components/styled/border.js'

const ArticleDetailContainer = styled.div`
  height: 100%;
  width:100%;
  background : #fff;
  overflow-y:scroll;
  .am-navbar{
    height : .34rem;
    width : 100%;
    background : #fff;
    position:relative;
    img{
      position:absolute;
      width :.2rem;
      height : .2rem;
      left: .15rem;
    }
  }
  div{
    width:100%;
    height:3.76rem;
    .pic{
      width:100%;
      height:100%;
    }
  }
  p{
    padding: .22rem .18rem ;
    color:#828282;
    font-size:.17rem;
    line-height:.24rem
  }
  dl{
    background:#fff
  }
  .box1{   
    padding:.31rem .16rem .24rem .16rem;
    height:1.57rem;
    box-sizing:content-box;
    ul{
      height:1.57rem;
      background:#fff;
      width:3.43rem;
      li:nth-child(1){
        margin-left:.12rem;
        padding-top:.1rem;
        .topic{
          display: inline-block;
          text-align:center;
          font-size:.12rem;
          background:#D1D1D1;
          width:.38rem;
          height:.2rem;
          border-radius:.03rem;
        }
      }
      li:nth-child(2){
        padding:.21rem 0 0 .12rem;
        font-size:.17rem;
        color:#333333;
        line-height:.24rem;
        font-family:PingFang SC;
      }
      li:nth-child(3){
        padding: .03rem .09rem .4rem .12rem;
        font-size:.14rem;
        color:#333333;
      }
    }
  }
    width:100%;
    .auth{
      padding:0 .22rem  .49rem .18rem;
      font-size:.14rem;
      line-height:.2rem;
    }

`
const SlideContainer  = border({
  color: '#707070',
  comp: styled.dl`
    margin: .1rem .15rem 0 .16rem;
    background:#fff;
  `
})

const BoxContainer = border({
  radius: 12,
  color:'#707070',
  comp: styled.ul`
  `
})

export {
  ArticleDetailContainer,
  SlideContainer,
  BoxContainer
}
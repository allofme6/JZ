import styled from 'styled-components'

import border from 'components/styled/border.js'
import iconStyled from 'components/styled/iconb.js'
import iconStyleds from 'components/styled/iconc.js'
import iconStyledz from 'components/styled/iconz.js'
import iconStyledss from 'components/styled/iconss.js'
import iconStyleda from 'components/styled/icona.js'



const ArticleDetailContainer =
  styled.div`
  height: 100%;
  width:100%;
  background : #fff;
  overflow-y:scroll;
  .nav{
    position:sticky;
    top:0;
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
  }
  .bigpic{
    width:100%;
    height:3.76rem;
    .pic{
      width:100%;
      height:100%;
    }
  }
  .details1{
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
      padding:.24rem .22rem  .49rem .18rem;
      font-size:.14rem;
      line-height:.2rem;
      color:#333333;
    }
    .mask{
      background: rgba(0, 0, .49, 0.52) !important;
      z-index: 10;
      height: 100%;
      width: 100%;
      position:absolute;
      left:0;
      right:0;
      top:0;
      bottom:0;
    
    }
   
`

const SlideContainer  = border({
  color: '#707070',
  comp: styled.dl`
    margin: .1rem .15rem 0 .16rem;
    background:#fff;
  `
})

const Border1Container = border({
  color:"#707070",
  comp:styled.ol`
  width:.18rem;
  margin-top:.7rem;
  margin-left: 1.32rem;
  `
})

const Border2Container = border({
  color:"#707070",
  comp:styled.ol`
  width:.18rem;
  margin-top: -.26rem;
  margin-left: 2.26rem;
  z-index:0;
  `
})

const BoxContainer = border({
  radius: 12,
  color:'#707070',
  comp: styled.ul`
  `
})

const FooterContainer = iconStyled(
  styled.footer`
      width:100%;
      height:.49rem;
      display:flex;
      box-shadow: 0px -1px 17px #cecdcd;
      .left{
        padding: .12rem 0 .1rem .18rem;
        height:.28rem;
        .lcontext{
          width:1.09rem;
          height:.28rem;
          background :#DFDFDF;
          border-radius:.14rem;
          display:flex;
          i{
            font-family: 'iconfont';
            color:#7D7D7D;
            font-size:.17rem;
            padding:0rem 0 .06rem .14rem;
          }
          span{
            color:#7D7D7D;
            font-size:.14rem;
            width:.56rem;
            height:.20rem;
            display: inline-block;
            padding: .04rem .13rem .04rem .09rem;
            box-sizing:content-box;
            line-height:.2rem;
          }
        }
    }
    .cc{
      height:100%;
      padding:0.16rem 0 .14rem .59rem;
      display:flex;
      >p{
        width:.2rem;
        height:.2rem;
        background-image:url("./collect.png");
        background-repeat:no-repeat;
        background-size:100% 100%;
        &.active{
        z-index:10;
        background-image:url("./activecollect.png");
        background-repeat:no-repeat;
        background-size:100% 100%;
      }
      }
      >span{
        display: inline-block;
        font-size:.12rem;
        color:#7D7D7D;
        margin-top:-.09rem;
        &.active{
          color:#FFCC00;
        }
      }
    }
    /* .am-action-sheet-body{
      .logId{
        .am-action-sheet-button-list-item{
          color:#00D182
        }
      }
    } */
  `
)

const ChatContainer = iconStyleds(
  styled.em`
     font-family: 'iconfont';
      color:#515151;
      font-size:.2rem;
      padding:0.13rem 0 .14rem .35rem;
      display:flex;
      .cnums{
        display: inline-block;
        width:.07rem;
        height:.17rem;
        font-size:.12rem;
        color:#7D7D7D;
        margin-top:-.09rem;
      }
  `
)

const DzContainer = iconStyledz(
  styled.i`
      font-family: 'iconfont';
      color:#515151;
      font-size:.2rem;
      padding:0.13rem 0.15rem .14rem .32rem;
      display:flex;
      >span{
        display: inline-block;
        font-size:.12rem;
        color:#7D7D7D;
        margin-top:-.09rem;
        &.active{
          color:red;
          z-index: 1002;
        }
      }
      &.active{
        color:red;
        z-index: 100;
      }
  `
)

const SendContainer = iconStyledss(
  styled.i`
    font-family: 'iconfont';
    color:#000;
    font-size:.2rem;
    width:.2rem;
    height:.2rem;
    padding:0  0.2rem 0 .22rem;
    margin-top:-.05rem;
    box-sizing:content-box;
  `
)

const CommentsContainer = styled.div`
  background:#fff;
  width:100%;
  height:5rem;
  overflow-y:scroll;
  display: ${props => props.display};
  margin-top:45%;
  position:fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  z-index:1111;
  .title{
    height:.24rem;
    box-sizing:content-box;
    display:flex;
    padding-top:.07rem;
    /* text-align:center; */
    .comments{
      font-size:.17rem;
      height:.24rem;
      padding-left:1.57rem;
      color:#333333;
    }
    .am-icon-cross{
      margin-top:-.04rem;
      padding-left:1.06rem;
      box-sizing:content-box;
    }
  }
  .commentfoot{
    width:100%;
    .commentl{
      padding:.25rem 0 0 .16rem;
      color:#333333;
      font-size:.17rem;
      font-weight:Bold;    
  }
  .authcomment1{
    width:100%;
    padding-left:.16rem;
    display:flex;
    position: relative;
    height:100% !important;
    .ctouxiang{
      width:.3rem;
      height:.3rem;
      padding-top:.44rem;
      box-sizing:content-box;
    }
    .ccontext{
      padding-left:.09rem;
      .nicheng{
        font-size: .13rem;
        color:#333333;
        padding:.35rem 0 0 0;    
      }
      .times{
        font-size:.12rem;
        color:#848484;
        padding:0;
      }
      .context{
        font-size:.12rem;
        color:#343434;
        padding:.03rem .33rem 0 0;
        line-height:.17rem;
      }
      .otherscomments{
        padding:.12rem .21rem 0 0;
        .others{
          background:#E2E2E2;
          border-radius:.05rem;
          font-size:.12rem;
          box-sizing:content-box;
          padding:0;
          .othersni{
            color:#098100;
            padding:.03rem 0 .02rem .06rem;
          }
          .otherscomment{
            color:#333333;
            padding-left:.03rem;
          }
        }
      }
    }
    
  }
}
.end{
  position: relative;
  height:.24rem;
  .endtext{
    font-size:.17rem;
    color:#858585;
    padding-left:1.6rem;
    position: absolute;
    top:-.11rem;
    display:flex;
    justify-content:center;
    .dian1{
      width:.09rem;
      height:.24rem;
      display:flex;
      justify-content:center;
      align-items:center;
      padding-right:.07rem;
    }
    .dian2{
      width:.09rem;
      height:.24rem;
      display:flex;
      justify-content:center;
      align-items:center;
      padding-left:.07rem;
    }
  }
}

.commentend{
  width:100%;
  height:.49rem;
  display:flex;
  margin-top:.49rem;
  box-shadow: 0px -1px 17px #cecdcd;
  .write{
    padding:.14rem .65rem .14rem .15rem;
    display:flex;
    align-items:center;
    .writecomments{
    width:2.98rem;
    line-height:.17rem;
    height:.21rem;
    border-radius:.04rem;
    background:#E2E2E2;
    border:0;
    font-size:.12rem;
    color:#949393;
    padding:.03rem 1.61rem .02rem .06rem;
  }
}
  
}
`

const DzCommentContainer = iconStyledz(
  styled.i`
      width:.5rem;
      font-family: 'iconfont';
      color:#515151;
      font-size:.15rem;
      height:.17rem;
      display:flex;
      justify-content:flex-end;
      float:right;
      position: absolute;
      right:.2rem;
      top:.33rem;
      >span{
        display: inline-block;
        font-size:.12rem;
        color:#7D7D7D;
        padding-right:.07rem;
        &.active{
          color:red;
          z-index: 1002;
        }
      }
      &.active{
        color:red;
        z-index: 1000;
      }
  `
)

const CollectContainer = styled.div`
  background:#fff;
  width:100%;
  height:1.49rem;
  display: ${props => props.display};
  z-index:1111;
  position: relative;
  .collectcontainer{
    background:#fff;
    width:100%;
    height:1.49rem;
    padding-left:.15rem;
    /* position:absolute!important;
    top:-1rem; */
    position:fixed !important;
    left:0;
    right:0;
    /* top:0; */
    bottom:0;
    display: ${props => props.display};
    .first{
      padding : .17rem 0 0 0;
      >span:nth-child(1){
        font-size:.17rem;
        color:#333333;       
      }
      >span:nth-child(2){
        padding : .17rem 0 0 .09rem;
        font-size:.17rem;
        color:#00D182;
      }
    }
    .second{
      display:flex;
      box-sizing:content-box;
      >span:nth-child(1){
        color:#9A9A9A;
        height:100%;
        font-size:.12rem;
        padding-top:.11rem;
      }
    }
    .third{
      display:flex;
      position: relative;
      top:-.6rem;
      .add{
        color:#9A9A9A;
        height:100%;
        font-size:.12rem;
        padding-top:.11rem;
        padding-left:.09rem;
      }
    }
  }
`

const CollectBorder = border({
  color: '#707070',
  comp: styled.em`
    width:2.77rem;
    height:100%;
    margin:.2rem .15rem .88rem .07rem;
    background:#fff;
  `
})

const AddContainer =iconStyleda(
  styled.i`
    font-family: 'iconfont';
    font-size:.32rem;
    width:.32rem;
    height:.32rem;
    
  `
)


export {
  ArticleDetailContainer,
  SlideContainer,
  BoxContainer,
  FooterContainer,
  ChatContainer,
  DzContainer,
  CommentsContainer,
  DzCommentContainer,
  Border1Container,
  Border2Container,
  SendContainer,
  CollectContainer,
  CollectBorder,
  AddContainer
}
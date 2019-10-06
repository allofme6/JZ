import styled from 'styled-components';


const ProfilePublishContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .publish-card{
        width: 100%;
        height: 2.3rem;
        background-color: #0CC3C0;
        position: relative;
        flex-shrink: 0;
        .cover,.edit{
            font-size: .12rem;
            color: #3C3C3C;
            line-height: .17rem;
            text-align: center;
            position: absolute;
            width: 100%;
            letter-spacing: 0.01rem;
        }
        .cover{
            top: 1.75rem;
        }
        .edit{
            top: 1.96rem;
        }
    }
    .publish-main{
        flex: 1;
        background-color: #fff;
        position: relative;
        >h3{
            padding-left: .15rem;
            font-size: .17rem;
            color: #000;
            line-height: .24rem;
            font-weight: 400;
            letter-spacing: .01rem;
        }
        .publish-list{
            width: 100%;
            
        }
    }


`

export{
    ProfilePublishContainer
}
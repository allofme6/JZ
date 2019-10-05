import styled from 'styled-components'

const ProfileContainer = styled.div`
    width:100%;
    height:100%;
    .profile-options{
        height: 3.61rem;
        width: 100%;
        background-color: #fff;
        position: relative;
        .profile-setUp{
            position: absolute;
            left: .16rem;
            top: 2.71rem;
            box-shadow:0px -3px 10px rgba(0,65,60,0.16);
            border-radius: .1rem;
        }
        .profile-options-list{
            width: 91.87%;
            display: flex;
            height: 2.49rem;
            flex-direction: column;
            justify-content: space-around;
            position: absolute;
            left: .16rem;
            top: .17rem;
            box-shadow:0px -3px 10px rgba(0,65,60,0.16);
            border-radius: .1rem;
            .profile-item{
                width: 100%;
                border-radius: .1rem;
            }
        }
        .profile-wallet{
            box-shadow:0px -3px 10px rgba(0,65,60,0.16);
            position: absolute;
            left: .16rem;
            top: -0.47rem;
            z-index: 1;
            border-radius: .1rem;
        }
        .profile-item{
            width: 91.87%;
            height: .59rem;
            display: flex;
            padding: .16rem .08rem;
            justify-content: space-between;
            background-color: #fff;
            align-items: center;
            .profile-item-img{
                width: .29rem;
                height: .28rem;
                img{
                    width: 100%;
                }
            }
            .profile-item-title{
                flex: 1;
                padding-left: .24rem;
                text-align: left;
                font-size: .17rem;
                color: #000;
            }
            .profile-forward{
                width: .2rem;
                height: .2rem;
                img{
                    width: 100%;
                }
            }
        }
    }
    .card-container{
        height: 2.86rem;
        width: 100%;
        background-color: #0CC3C0;
        position: relative;
        h4{
            color: #fff;
            font-size: .17rem;
            line-height: .24rem;
            text-align: center;
            position: absolute;
            display: block;
            width: 100%;
            font-weight: 600;
            letter-spacing: .01rem;
            top: 1.67rem;
        }
        .card-topBar{
            padding: 0 .15rem  0 .11rem;
            height: .52rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .card-back{
                width: .2rem;
                height: .2rem;
                img{
                    width:100%;
                }
            }
            .card-msg{
                width: .28rem;
                height: .28rem;
                position: relative;
                .msg{
                    width:100%;
                }
                .tips{
                    position:absolute;
                    z-index:1;
                    width: .11rem;
                    top: 0;
                    right: 0;
                }
            }
        }
    }

`
export { 
    ProfileContainer
}
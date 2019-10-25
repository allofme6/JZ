import React from 'react'

import {Route,Switch,withRouter,Redirect} from 'react-router-dom'

import {CollectionContainer} from '../StyledCollection'
import Wrapper from './commponnets/Wrapper'
import List from './commponnets/List'

import NavBar from 'components/navBar/NavBar'


// import Item from 'components/profileItem/ProfileItem'
// import EmptyTip from 'components/emptyTip/EmptyTip'


const CollectionUI = (props)=>{
    let path = props.match.path
    return (
        <CollectionContainer>
            <NavBar
                aligns="center"
                colors="#000"
                titleText="我的收藏"
            />
            <Switch>
             
                <Route  path={path+ '/wrapper'} children={function(){
                            return(<Wrapper list={props.collectionList} handleAction={props.handleAction}></Wrapper>)
                        }}></Route>)
                <Route  path={path+ '/list'} children={
                    function(){
                        return(<List  list={props.list}></List>)
                    }
                }></Route>
                 <Redirect exact from={path} to={path + '/wrapper'}></Redirect>
            </Switch>
            {/* {
                props.collectionList 
                ? (
                <div className="collection-list">
                    <Item></Item>
                </div>
                ) 
                : (
                    <EmptyTip
                        bearPosition="top: 1.74rem;"
                        tipTitle="我的收藏空空入也"
                        tipPosition="top: 3.29rem"
                    ></EmptyTip>
                )

            } */}

        </CollectionContainer>
    )
}

export default withRouter(CollectionUI)
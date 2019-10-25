import React from 'react';

import {RecordContainer} from '../StyledRecord';
import NavBar from 'components/navBar/NavBar';
import EmptyTip from 'components/emptyTip/EmptyTip';

import recordImg from 'images/profile/recordImg.jpg';


export default (props)=>{
    console.log(props);
    return (
        <RecordContainer>
            <NavBar
                aligns="center"
                titleText="浏览记录"
                colors="#000"
            />
            <div className="record-list">
            {
                props.recordList.length
                ?(
                    <div className="list-box">
                        <ul>
                            {
                                props.recordList.map((value,index)=>{
                                    return(
                                        <li key={value.tTime} onClick={()=>{props.handleClick(value)}}>
                                            <img src={'http://10.9.24.153:8080/'+value.tImage} alt=""/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                     </div>
                )
                :(
                    <EmptyTip
                        bearPosition="top: 1.89rem;"
                        tipTitle= "还没有浏览记录的哦"
                        // actionTitle= "去讨论"
                        tipPosition= "top: 3.78rem;"
                        actionPosition= "top: 3.99rem;"
                    />
                )
            }
            </div>
        </RecordContainer>
    )
}

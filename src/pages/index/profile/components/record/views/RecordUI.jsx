import React from 'react';

import {RecordContainer} from '../StyledRecord';
import NavBar from 'components/navBar/NavBar';
import EmptyTip from 'components/emptyTip/EmptyTip';

import recordImg from 'images/profile/recordImg.jpg';


export default (props)=>{
    return (
        <RecordContainer>
            <NavBar
                aligns="center"
                titleText="浏览记录"
                colors="#000"
            />
            <div className="record-list">
            {
                props.recordList 
                ?(
                    <div className="list-box">
                        <ul>
                            <li>
                                <img src={recordImg} alt=""/>
                            </li>
                            <li>
                                <img src={recordImg} alt=""/>
                            </li>
                            <li>
                                <img src={recordImg} alt=""/>
                            </li>
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
            {/* <div className="record-list">
                <div className="list-box">
                    <ul>
                        <li>
                            <img src={recordImg} alt=""/>
                        </li>
                        <li>
                            <img src={recordImg} alt=""/>
                        </li>
                        <li>
                            <img src={recordImg} alt=""/>
                        </li>
                    </ul>
                </div>
                <EmptyTip
                        bearPosition="top: 1.89rem;"
                        tipTitle= "还没有浏览记录的哦"
                        // actionTitle= "去讨论"
                        tipPosition= "top: 3.78rem;"
                        actionPosition= "top: 3.99rem;"
                />
            </div> */}
        </RecordContainer>
    )
}

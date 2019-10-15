import React from 'react';

import {RecordContainer} from '../StyledRecord';
import NavBar from 'components/navBar/NavBar';

import recordImg from 'images/profile/recordImg.jpg';

export default ()=>{
    return (
        <RecordContainer>
            <NavBar
                aligns="center"
                titleText="浏览记录"
                colors="#000"
            />
            <div className="record-list">
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
            </div>
        </RecordContainer>
    )
}

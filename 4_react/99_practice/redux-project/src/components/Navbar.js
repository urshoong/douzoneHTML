import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(){

    return(
        <>
            <ul>
                <li><NavLink to='/'>메인으로</NavLink> </li>
                <li><NavLink to='/menu'>메뉴보기</NavLink></li>
                <li><NavLink to='/login'>로그인</NavLink></li>
            </ul>
        </>
    )
}

export default Navbar;
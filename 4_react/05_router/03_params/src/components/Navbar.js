

/* 
import { Link } from 'react-router-dom';
function Navbar(){

    return(
        <div>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">소개</Link></li>
                <li><Link to="/menu">메뉴목록</Link></li>
            </ul>
        </div>
    )
}
 */

import { NavLink } from 'react-router-dom';

function Navbar(){
    const activestyle = {
        backgroundColor : 'orangered'
    }
    return(
        <div>
            <ul>
                {/* NavLink */}
                {/* isActive 상태값을 사용할 수 있고, style을 callback함수를 통해서 사용할 수 있다 */}
                <li><NavLink to="/" style={({isActive}) => isActive ? activestyle : undefined}>HOME</NavLink></li>
                <li><NavLink to="/about" style={({isActive}) => isActive ? activestyle : undefined}>소개</NavLink></li>
                <li><NavLink to="/menu" style={({isActive}) => isActive ? activestyle : undefined}>메뉴목록</NavLink></li>
            </ul>
        </div>
    )
}
export default Navbar;
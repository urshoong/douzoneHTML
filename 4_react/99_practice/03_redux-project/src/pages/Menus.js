import MenuList from "../components/lists/MenuList";
import { useNavigate } from "react-router-dom";

function Menus() {

    const loginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();

    return (
        <div>
            <h1>메뉴 목록 </h1>
            { (loginStatus) && <button className ="button" onClick={ () => navigate(`/menu/regist`) }>메뉴 추가</button> } 
            <MenuList/>
        </div>
    );
}

export default Menus;
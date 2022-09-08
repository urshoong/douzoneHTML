import itemStyle from "./MenuItem.module.css"
import { Link } from 'react-router-dom';

//pathvariable 형태로 메뉴 코드값 전달
//라우터에 등록된 MenuDetails 로 이동
function MenuItem({menu}){

    return(
        <Link to={`/menu/${menu.menuCode}`}>
            <div className={itemStyle.MenuItem}>
                <h3>이름 : {menu.menuName}</h3>
                <h3>가격 : {menu.menuPrice}</h3>
                <h3>종류 : {menu.categoryName}</h3>
            </div>
        </Link>
    )
}

export default MenuItem;
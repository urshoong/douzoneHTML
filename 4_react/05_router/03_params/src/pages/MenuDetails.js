import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { getMenuDetail } from '../api/getMenuAPI';

function MenuDetails(){
    
    const {menuCode} = useParams();

    const [menu, setMenu] = useState({
        menuName : '',
        menuPrice : 0,
        categoryName : '',
        detail : {}
    });

    useEffect(() => {
        setMenu(getMenuDetail(menuCode));
    }, [menuCode])
    
    return(
        <>
            <h2>메뉴상세 설명</h2>
            <h3>메뉴 이름 : {menu.menuName}</h3>
            <h3>메뉴 가격 : {menu.menuPrice}</h3>
            <h3>메뉴 종류 : {menu.categoryName}</h3>
            <h3>메뉴 설명 : {menu.detail.description}</h3>
            <img src={menu.detail.image} style={{maxWidth:500}} alt={"이미지가 없습니다"}/>
        </>
    )
}

export default MenuDetails;
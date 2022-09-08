import {useSearchParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { serachMenu } from '../api/getMenuAPI';
import boxStyle from './Menu.module.css';
import MenuItem from '../components/MenuItem';

function MenuSearchResult(){

    const [searchParams] = useSearchParams();

    const menuName = searchParams.get('menuName');

    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        setMenuList(serachMenu(menuName));
    }, [menuName])
    

    return(
        <>
            <h1>검색된 메뉴</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    )
}

export default MenuSearchResult;
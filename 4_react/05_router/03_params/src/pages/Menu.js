import {useState, useEffect} from 'react'
import { getMenuList } from '../api/getMenuAPI';
import MenuItem from '../components/MenuItem';
import boxStyle from './Menu.module.css';
import {useNavigate} from 'react-router-dom'

function Menu(){
    const [menuList, setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      setMenuList(getMenuList());
    }, [menuList])
    //https://velog.io/@soryeongk/ReactRouterDomV6
    const onClickHandler = () => {
        navigate(`/menu/search?menuName=${searchValue}`);
    }
    const onKeyPressHandler = () => {
        onClickHandler();
    }

    return (
        <>
            <h1>판매 메뉴 목록</h1>
            <div>
                <input type="serach" name="menuName" value={searchValue} onChange={e => setSearchValue(e.target.value)} onKeyPress={onKeyPressHandler}/>
                <button onClick={onClickHandler}>검색</button>
            </div>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    )
}

export default Menu;
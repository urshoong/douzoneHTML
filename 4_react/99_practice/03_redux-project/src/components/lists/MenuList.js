import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MenuListItem from '../items/MenuListItem';
import { callGetMenuListAPI } from "../../apis/MenuAPICalls";


function MenuList() {

    const result = useSelector(state => state.menuReducer);
    const menuList = result.menulist;
    const dispatch = useDispatch();

    console.log(menuList);

    useEffect(
        () => {
            /* menuList 호출 API */
            dispatch(callGetMenuListAPI());
        },// eslint-disable-next-line
        []
    );
    

    return (
        menuList && (
            <div className="menuBox">
                { menuList.map(menu => <MenuListItem key={ menu.id } menu={ menu }/>) }
            </div>
        )
    );
}

export default MenuList;
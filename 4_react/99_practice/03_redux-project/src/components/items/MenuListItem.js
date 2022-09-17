import { Link } from  'react-router-dom';

function MenuListItem({ menu }) {

    return (
        <Link to={ `/menu/${ menu.id }` }>
            <div className="menuItem">
                <h4>이름 : { menu.menuName }</h4>
                <h3>가격 : { menu.menuPrice }</h3>
                <h4>종류 : { menu.categoryName }</h4>
            </div>
        </Link>
    );
}

export default MenuListItem;
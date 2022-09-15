import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { callGetMenuAPI } from '../../apis/MenuAPICalls';
import { callGetPagingAPI } from '../../apis/PageAPICalls';
import { useNavigate } from 'react-router-dom';

function MenuDetailItem({ id }) {
    const result = useSelector(state => state.menuReducer);
    const result2 = useSelector(state => state.pageReducer);
    const menu = result.menu;
    const paging = result2.paging;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(
        () => {
            /* menu 호출 API */
            dispatch(callGetMenuAPI(id));
            dispatch(callGetPagingAPI(id));
        },// eslint-disable-next-line
        []
    );
    
    useEffect(() => {
        console.log('paging :: ', paging);
    }, [paging])

    const onClickHandler = (e) => {
        console.log(e.target.name);
        const gbn = e.target.name;
        switch(gbn){
            case 'prev':
                navigate(`/menu/${parseInt(paging.prev)}`)
                navigate(0)
                break;
            case 'next':
                navigate(`/menu/${parseInt(paging.next)}`)
                navigate(0)
                break;
            default:
                break;
        }
    }

    return (
        menu && (
            <>
                <div>
                    <h3>메뉴 이름 : { menu.menuName }</h3>
                    <h3>메뉴 가격 : { menu.menuPrice }</h3>
                    <h3>메뉴 종류 : { menu.categoryName }</h3>
                    <h3>메뉴 상세 : { menu.detail.description }</h3>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        {/* detail 페이지에서 이전/이후 메뉴에 접근하기 위한 버튼
                            별도의 pageAPI에서 해당 메뉴에 대한 정보를 기반으로 이전, 지금, 다음 메뉴에 대한 정보 return 받아서 처리
                         */}
                        {paging && (paging.prev < paging.curr) && <button name='prev' onClick={onClickHandler}>&nbsp;{'◀'}&nbsp;</button>}
                        <img src={ menu.detail.image } style={ { maxWidth: 500 } } alt={ menu.menuName }/>
                        {paging && (paging.next > paging.curr) && <button name='next' onClick={onClickHandler}>&nbsp;{'▶'}&nbsp;</button>}
                    </div>
                </div>
            </>
        )
    );
}

export default MenuDetailItem;
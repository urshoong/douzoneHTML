import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callDeleteMenuAPI } from '../apis/MenuAPICalls';
import MenuDetailItem from '../components/items/MenuDetailItem';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

function MenuDetail() {
    const MySwal = withReactContent(Swal);

    /* 로그인 상태 확인 */
    const loginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // {id} : /menu/:id 에서 동적 매개변수의 키/값 쌍의 개체를 반환받아 구조분해할당
    const { id } = useParams();
    const result = useSelector(state => state.menuReducer);

    const updateHandler = () => navigate(`/menu/modify/${id}`);
    const deleteHandler = () => dispatch(callDeleteMenuAPI(id));

    useEffect(
        () => {
            // console.log('menudetail\n', result);
            //잘못된 id값을 전달하여 return된 값이 없을 경우, error 처리
            if(Object.keys(result).join('') === 'menu' && !result.menu){
                // navigate(-1); //다시 호출한 페이지로 이동
                navigate('/ERROR'); //강제로 없는페이지 호출하여 Error페이지 호출
                
            }
            /* 메뉴 삭제 완료 확인 후 /menu로 이동 */
            if (result.delete) {
                // alert('메뉴 삭제');
                MySwal.fire({
                    icon: 'success',
                    title: '메뉴 삭제 완료',
                })
                navigate(`/menu`);
            }
        }, // eslint-disable-next-line
        [result]
    );

    return (
        <div>
            <h1>메뉴 상세</h1>
            <h1>
                { /* 로그인 된 상황에만 button이 보이도록 조건부 랜더링 */ }
                { (loginStatus) && 
                    <>
                        <button className ="button" onClick={ updateHandler }>메뉴 수정</button>
                        <button className ="button" onClick={ deleteHandler }>메뉴 삭제</button>
                    </>
                }
            </h1>
            <MenuDetailItem id={ id }/>
        </div>
    );
}

export default MenuDetail;
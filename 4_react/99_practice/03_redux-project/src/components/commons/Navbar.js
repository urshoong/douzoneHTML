import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { resetLoginUser } from "../../modules/UserModule";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

function Navbar() {
    const MySwal = withReactContent(Swal);

    //이중부정을 통하여 falsy, truthy값을을 boolean 형태로 변환하여 사용하기 위함
    const loginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    /* 로그아웃 호출 시 localStorage 저장 값 삭제, userReducer 값 리셋, 루트로 이동  */
    const logoutHandler = () => {
        //localstorage에서 isLogin값 제거 >> localstorage.getItem('isLogin') 시 falsy값인 null이 리턴되도록 함 
        localStorage.removeItem('isLogin');
        //resetLoginUser action함수를 호출하여 dispatch를 통하여 reducer로 전달 >> payload 값이 {}로 초기화 하려는 목적
        dispatch(resetLoginUser());
  
        // alert('로그아웃이 되어 메인화면으로 이동합니다.');
        MySwal.fire({
            icon: 'info',
            title: '로그아웃이 되어 메인화면으로 이동합니다.'
        }).then(() => {
            //replace:true 인 경우 navigate에 적힌 주소로 넘어간 후 뒤돌아가기를 하더라도 이전 페이지로 돌아오지 않는고 ('/') 페이지로 돌아온다
            //useNavigate 의 properties로 pathname 과 options를 넘길 수 있으며, options에는 repace와 state 를 넘길 수 있다.
            //state에서는 객체의 형태로 숨김 데이터를 props로 전달할 수 있다.
            //전달받는 페이지에서는 useLocation Hook을 사용하여 전달받은 props를 확인할 수 있다.
            //※useHistory Hook을 사용하여 props를 넘겨주는 방법도 있다.
            navigate("/", { replace: true });
            //새로고침
            window.location.reload();
        })
    
    }

    return (
        <div>
            <ul>
                <li><NavLink to='/'>메인으로</NavLink></li>
                <li><NavLink to='/menu'>메뉴보기</NavLink></li>
                {/* localStorage 안의 값으로 로그인 여부 판단하여 조건부 랜더링 */}
                { !loginStatus ? (
                        <li><NavLink to='/login' className='flux'>로그인</NavLink></li>
                    ) : (
                        <li onClick={ logoutHandler }><NavLink to="" className='neon'>로그아웃</NavLink></li>
                    )
                }

            </ul>
        </div>
    );
}

export default Navbar;
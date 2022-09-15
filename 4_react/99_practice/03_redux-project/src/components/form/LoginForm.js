import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { callLoginAPI } from '../../apis/UserAPICalls';
import { resetLoginUser } from "../../modules/UserModule";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'


function LoginForm() {
    const MySwal = withReactContent(Swal);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //store에서 userReducer 가져오기
    const result = useSelector(state => state.userReducer);
    //이중부정을 통하여 falsy, truthy값을을 boolean 형태로 변환하여 사용하기 위함
    const loginStatus = !!localStorage.getItem('isLogin');

    /* input 태그 입력 값 state 관리 */
    const [loginInfo, setLoginInfo] = useState(
        {
            id : '',
            password : ''
        }
    );

    /* 입력 값 변경 시 이벤트 핸들러 */
    const onChangeHandler = (e) => {
        setLoginInfo(
            {
                ...loginInfo,
                [e.target.name] : e.target.value
            }
        );
    }

    /* 로그인 버튼 클릭 시 동작 */
    const onClickHandler = () => {

        /* loginInfo에 대한 유효성 검사 후 호출 */
        dispatch(callLoginAPI(loginInfo));

    }

    /* 로그인 후 성공 실패 동작 */
    useEffect(
        () => {
            //로그인 실패 시 result로 {message:'LOGIN_FAIL'} 전달 받으나 정상적으로 로그인 될 경우 로그인한 user의 객체를 전달받음 {id, password, nickname}
            //result => {} 경우 falsy값이므로 message에 접근하지 않고 false 처리되어 else if단계로 넘어감.
            if(result?.message) {
                // alert('아이디와 비밀번호를 확인해주세요');
                MySwal.fire({
                    icon: 'error',
                    title: '아이디와 비밀번호를 확인해주세요'
                })
                //로그인 실패 시 LoginForm component의 loginInfo state 빈 값으로 처리
                setLoginInfo(
                    {
                        id : '',
                        password : ''
                    }
                );
                //resetLoginUser action에 payload값을 전달하지 않음으로 store에 userReducer에 담기는 값을 {} 로 초기화
                dispatch(resetLoginUser());
            //login 성공시 
            } else if(loginStatus){
                MySwal.fire({
                    title: `${loginInfo.id} 님 환영합니다`,
                    width: 600,
                    padding: '3em',
                    color: '#716add',
                    background: '#fff url(/images/trees.png)',
                    backdrop: `
                        rgba(0,0,123,0.4)
                        url("/images/nyan-cat.gif")
                        left top
                    `
                })
                navigate('/');
            } 
        },// eslint-disable-next-line
        [result]
    );

    
    return (
            <>
                <div>
                    <label>ID : </label>
                    <input type="text" name="id" value={ loginInfo.id } onChange={ onChangeHandler }/> &nbsp;&nbsp;&nbsp;
                    <label>PASSWORD : </label>
                    <input type="password" name="password" value={ loginInfo.password } onChange={ onChangeHandler }/>&nbsp;
                    <button className ="button" onClick={ onClickHandler }>로그인</button>
                </div>
            </>
    );
}

export default LoginForm;
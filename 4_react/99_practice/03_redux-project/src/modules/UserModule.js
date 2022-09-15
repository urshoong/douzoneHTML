import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = {};

/* 액션 타입 설정 */
export const LOGIN = 'user/LOGIN';
//_로 연결된 단어들이 camelCase 형태로 함수명이 설정된다
export const RESET_LOGIN_USER = 'user/RESET_LOGIN_USER';

/* 유저 관련 액션 함수 */
export const { user : { login, resetLoginUser }} = createActions({
    [LOGIN]: (res) => ({ res }),
    [RESET_LOGIN_USER]: (res = initialState) => ({ res }),
});

/* 리듀서 함수 */
const userReducer = handleActions(
    {   
        [LOGIN]: (state, { payload : {res} }) => {

            if(res) {
                /* HTML5 에서 추가된 저장소 
                브라우저 닫고 다시 열어도 상태유지, 로그인유지 :  localStorage
                브라우저를 닫으면 상태유지안함 : sessionStorage
                localStorage에 로그인 상태 저장 */
                localStorage.setItem("isLogin", true);
            } else {
                //로그인 유효성 검사 결과 빈 객체를 전달받을 경우 메시지로 로그인 실패 전달
                res = { message : 'LOGIN_FAIL'};
            }

            return res;

        },
        //resetLoginUser 실행 시 {}로 초기화
        [RESET_LOGIN_USER]: (state, { payload : { res } }) => {
            
            return res;

        }
    },
    initialState
);

export default userReducer;


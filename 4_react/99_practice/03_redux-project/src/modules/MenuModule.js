import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = {};

/* 액션 타입 설정 */
const GET_MENULIST = 'menu/GET_MENULIST';
const GET_MENU = 'menu/GET_MENU';
const POST_MENU = 'menu/POST_MENU';
const PUT_MENU = 'menu/PUT_MENU';
const DELETE_MENU = 'menu/DELETE_MENU';

/* 메뉴 관련 액션 함수 */
export const { menu : { getMenulist, getMenu, postMenu, putMenu, deleteMenu }} = createActions({
    [GET_MENULIST]: (res) => ({ menulist : res }),
    [GET_MENU]: (res) => ({ menu : res }),
    [POST_MENU]: (res) => ({ regist : res }),
    [PUT_MENU]: (res) => ({ modify : res }),
    [DELETE_MENU]: (res) => ({ delete : res }),
});

/* 리듀서 함수 */
const menuReducer = handleActions(
    {   
        [GET_MENULIST]: (state, { payload }) => {
            return payload;
        },
        [GET_MENU]: (state, { payload }) => {
            return payload;
        },
        [POST_MENU]: (state, { payload }) => {
            return payload;
        },
        [PUT_MENU]: (state, { payload }) => {
            return payload;
        },
        [DELETE_MENU]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default menuReducer;


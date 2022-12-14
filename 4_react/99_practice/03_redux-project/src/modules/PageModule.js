import { createActions, handleActions } from 'redux-actions';

/* 초기 state값 */
const initialState = {};

/* 액션 타입 설정 */
const GET_PAGELIST = 'page/GET_PAGELIST';
const GET_PAGING = 'page/GET_PAGING';
const GET_PAGEID = 'page/GET_PAGEID';

/* 메뉴 관련 액션 함수 */
export const { page : { getPagelist, getPaging, getPageid }} = createActions({
    [GET_PAGELIST]: (res) => ({ pagelist : res }),
    [GET_PAGING]: (res) => ({ paging : res }),
    [GET_PAGEID]: (res) => ({ pageid : res }),
});

/* 리듀서 함수 */
const pageReducer = handleActions({
    [GET_PAGELIST]: (state, {payload}) => {
        return payload;
    },
    [GET_PAGING]: (state, {payload}) => {
        return payload;
    },
    [GET_PAGEID]: (state, {payload}) => {
        return payload;
    }
}, initialState);

export default pageReducer;
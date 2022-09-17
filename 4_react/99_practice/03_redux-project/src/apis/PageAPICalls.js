import { request } from './Api';
import { getPagelist, getPaging } from '../modules/PageModule';

export function callGetPageListAPI(){
    console.log('callGetPagelist api calls...');

    /* redux-thunk(미들 웨어)를 이용한 비동기 처리 */
    return async (dispatch, getState) => {
        
        /* Api의 axios 처리 참조  */
        const result = await request('GET', '/menu');
        const res = result.map((cur) => {
            return cur.id;
        })
        
        console.log('getPageList result : ', res);
        
        /* action 생성 함수에 결과 전달하며 dispatch 호출 */
        dispatch(getPagelist(res));

    }
}

export function callGetPagingAPI(id){
    console.log('callGetPaging api calls...');
    /* redux-thunk(미들 웨어)를 이용한 비동기 처리 */
    return async (dispatch, getState) => {
        
        /* Api의 axios 처리 참조  */
        const result = await request('GET', '/menu');
        
        //메뉴 상세 페이지에서 이전/다음 페이지에 접근하기 위하여 
        const curr = parseInt(result.reduce((pre, cur, idx) => {
            if(cur.id === parseInt(id)) {
                pre = idx;
            };
            return pre;
        }, 0));
        const paging = {
            prev: curr === 0 ? result[curr].id : result[curr - 1].id,
            curr: result[curr].id,
            next: curr === result.length - 1 ? result[curr].id : result[curr + 1].id
        }
        
        console.log('getPageList result : ', paging);
        
        /* action 생성 함수에 결과 전달하며 dispatch 호출 */
        dispatch(getPaging(paging));

    }
}
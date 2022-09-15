import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

/**앱의 전체 상태 트리를 보유하는 Redux 저장소 생성
 * 앱에는 하나의 스토어만 있어야 한다.
 * 
 * rootReducer : combineReducers로 여러 reducer를 담고 있는 reducer
 * composeWithDevTools : chrome 의 확장도구인 redux devtools 연동하기 위함
 * applyMiddleware : middleware 적용
 * ReduxThunk : redux에서 비동기 처리 작엄을 할 때 많이 사용하는 middleware
 * logger : pre state, action, next state 를 확인하기 용이한 middleware
 */
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);

export default store;
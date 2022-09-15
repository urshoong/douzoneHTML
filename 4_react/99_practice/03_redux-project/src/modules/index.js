import { combineReducers } from "redux";
import userReducer from "./UserModule";
import menuReducer from "./MenuModule";
import pageReducer from './PageModule';

const rootReducer = combineReducers({
    userReducer,
    menuReducer,
    pageReducer
});

export default rootReducer;
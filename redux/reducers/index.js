
import { combineReducers } from "redux";
import user from './userReducers.js'


const rootReducer = combineReducers({
    user,
});
export default rootReducer;
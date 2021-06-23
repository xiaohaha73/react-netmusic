import {combineReducers} from "redux";
// 导入reducers
import recommend from "./reducers/findmusic-recommend"
import songDetail from "./reducers/songDetail";

// 合并所有reducers
export default combineReducers({
    recommend,
    songDetail
});

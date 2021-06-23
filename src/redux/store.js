import {createStore,applyMiddleware} from "redux";
// 导入redux辅助开发工具
import {composeWithDevTools} from "redux-devtools-extension";
// 导入异步请求中间件
import thunk from "redux-thunk";
// 导入reducers
import reducers from "./index";

// 创建store
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));

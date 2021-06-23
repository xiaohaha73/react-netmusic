import React from 'react';
import ReactDOM from 'react-dom';
// 导入redux相关文件
import {Provider} from "react-redux";
import store from "./redux/store";


// 导入样式
import "./assets/main.scss";
// 导入根页面
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


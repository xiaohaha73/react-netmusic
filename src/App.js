import {memo, Suspense} from "react";
import {renderRoutes} from "react-router-config";
import {HashRouter as Router} from "react-router-dom";

//导入route配置文件
import routes from "./router";
// 导入组件
import AppFooter from "./component/app-footer/app-footer";
import AppHeader from "./component/app-header/app-header";

function App() {
    return (
        <div className="App">
            <Router>
                <AppHeader/>
                <Suspense fallback={<div>loading...</div>}>
                    {renderRoutes(routes)}
                </Suspense>
                <AppFooter/>
            </Router>
        </div>
    );
}

export default memo(App);

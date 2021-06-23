import React, {memo} from 'react';
import {NavLink, Link} from "react-router-dom";

// 导入头部样式
import "../../assets/style/app-header.scss";

function AppHeader(props) {
    return (
            <div id="app-header">
                <div className="header-content">
                    <Link className="headerLogo" to="/"/>
                    <div className="nav">
                        <NavLink to="/findmusic">发现音乐</NavLink>
                        <NavLink to="/mymusic">我的音乐</NavLink>
                        <NavLink to="/friends">朋友</NavLink>
                        <a href="https://music.163.com/store/product">商城</a>
                        <a href="https://music.163.com/st/musician">音乐人</a>
                        <NavLink to="/download" className="downloadApp">下载客户端</NavLink>
                    </div>
                    <div className="searchBar">
                        <input type="text" placeholder="音乐/视频/电台/用户"/>
                        <Link to="/" className="creatorCenter">创作者中心</Link>
                        <Link to="/" className="Login">登陆</Link>
                    </div>
                </div>
            </div>

    );
}

export default memo(AppHeader);

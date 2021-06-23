import React from 'react';
import {NavLink} from "react-router-dom";
import {renderRoutes} from "react-router-config";

// 导入样式
import "../../assets/style/findmusic/findMusic.scss";

function FindMusic(props) {
    const {routes} = props.route;
    return (
        <div id="findMusic">
            <div className="nav-margin">
                <div className="navBar">
                    <ul>
                        <li><NavLink to="/findmusic/recommend">推荐</NavLink></li>
                        <li><NavLink to="/findmusic/rklist">排行榜</NavLink></li>
                        <li><NavLink to="/findmusic/songlist">歌单</NavLink></li>
                        <li><NavLink to="/findmusic/radio">主播电台</NavLink></li>
                        <li><NavLink to="/findmusic/singer">歌手</NavLink></li>
                        <li><NavLink to="/findmusic/newsong">新碟上架</NavLink></li>
                    </ul>
                </div>
            </div>
            {renderRoutes(routes)}
        </div>
    );
}

export default FindMusic;

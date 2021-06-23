import {Redirect} from "react-router-dom";
import React from "react";

// 导入路由组件
import FindMusic from "../component/content/FindMusic";
// import MyMusic from "../component/content/MyMusic";
import Friends from "../component/content/friends";
import Download from "../component/content/download";
import Recommend from "../component/content/findmusic-page/pages/recommend/recommend";
import RankingList from "../component/content/findmusic-page/pages/rankingList/rankingList";
import Songslist from "../component/content/findmusic-page/pages/songslist/songslist";
import Radios from "../component/content/findmusic-page/pages/radios/radios";
import Singer from "../component/content/findmusic-page/pages/singer/singer";
import NewSongs from "../component/content/findmusic-page/pages/newSongs/newSongs";
import Detail from "../component/content/findmusic-page/pages/songDetail/songDetail";

// 组件懒加载
const MyMusic = React.lazy(() => import("../component/content/MyMusic"));

const routes = [
    {
        path: "/",
        exact: true,
        render: () => (<Redirect to="/findmusic"/>),
    },

    // 发现音乐组件
    {
        path: "/findmusic",
        component: FindMusic,
        // 发现音乐界面的二级路由
        routes: [
            {
                path: "/findmusic",
                exact: true,
                render: () => (<Redirect to="/findmusic/recommend"/>)
            },
            {   // 推荐界面
                path: "/findmusic/recommend",
                component: Recommend
            },
            {
                path: "/findmusic/rklist",
                component: RankingList
            },
            {
                path: "/findmusic/songlist",
                component: Songslist
            },
            {
                path: "/findmusic/radio",
                component: Radios
            },
            {
                path: "/findmusic/singer",
                component: Singer
            },
            {
                path: "/findmusic/newsong",
                component: NewSongs
            },

            {   // 播放的音乐的详情界面
                path:"/findmusic/song",
                component: Detail
            }
        ]
    },


    // 我的音乐 组件
    {
        path: "/mymusic",
        component: MyMusic
    },

    // 我的朋友组建
    {
        path: '/friends',
        component: Friends
    },

    // 下载客户端界面
    {
        path: "/download",
        component: Download
    }
];

export default routes;

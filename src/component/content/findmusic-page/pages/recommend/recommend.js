import React, {memo, useEffect, Fragment} from 'react';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
// 导入action函数
import {
    asyncGetBanners,
    asyncGetHot,
    asyncGetNew,
    asyncGetRank,
    asyncGetSonger,
    asyncGetAnchor
} from "../../../../../redux/actions/findmusic-recommed";

// 导入样式文件
import "../../../../../assets/style/findmusic/recommend.scss"

// 导入组件
import BannerComponent from "./banner/banner";
import ListLeft from "./ListLeft/ListLeft";
import ListRight from "./ListRight/ListRight";

function Recommend(props) {

    // 连接redux
    const recommendData = useSelector(state => state.recommend, shallowEqual) // 获取state数据
    const dispatch = useDispatch(); // 获取dispatch
    // 从传递过来的redux的state数据中获取部分数据然后传递给子组件
    const bannerData = recommendData.get("bannersData"); // 轮播图数据
    const hotsData = recommendData.get("hotsData"); // 热点推荐数据
    const newAlbum = recommendData.get("newAlbum"); // 新碟数据
    const ranking = recommendData.get("ranking"); // 获取榜单数据
    const songer  = recommendData.get("songer"); // 获取入驻歌手信息
    const anchor = recommendData.get("anchor"); // 获取主播信息
    // 初始化加载
    useEffect(() => {
        dispatch(asyncGetBanners())
        dispatch(asyncGetHot())
        dispatch(asyncGetNew())
        dispatch(asyncGetRank())
        dispatch(asyncGetSonger())
        dispatch(asyncGetAnchor())
    }, [dispatch])

    return (
        <Fragment>
            <BannerComponent bannerImg={bannerData}/>
            <div className="list-container">
                {/*排行榜左侧*/}
                <ListLeft
                    hotsData={hotsData}
                    newAlbum={newAlbum}
                    ranking={ranking}
                />
                {/*排行榜右侧*/}
                <ListRight
                    songer={songer}
                    anchor={anchor}
                />
            </div>
        </Fragment>
    );
}

export default memo(Recommend);

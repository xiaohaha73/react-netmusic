import {getBanner, getHot, getNew, getAllRank, getSonger, getAnchor} from "../../request";

import {BANNERS, HOTALBUM, NEWALBUM, RANKING, SONGER,ANCHOR} from "../constant";

const GetBanners = (data) => ({type: BANNERS, data});

const GetHot = (data) => ({type: HOTALBUM, data});

const GetNew = (data) => ({type: NEWALBUM, data});

const GetRank = (data) => ({type: RANKING, data});

const GetSonger = (data) => ({type: SONGER, data});

const GetAnchor = (data) => ({type: ANCHOR, data});

// 发送异步请求的action
// 获取轮播图数据
export const asyncGetBanners = () => {
    return async (dispatch) => {
        const data = await getBanner();
        dispatch(GetBanners(data));
    }
}

// 获取热门推荐数据
export const asyncGetHot = () => {
    return async (dispatch) => {
        const data = await getHot()
        // 将数据传递给同步action
        dispatch(GetHot(data));
    }

}

// 获取新碟推荐的数据
export const asyncGetNew = () => {
    return async (dispatch) => {
        const data = await getNew();
        dispatch(GetNew(data));
    }
}

// 获取top榜数据
export const asyncGetRank = () => {
    return async (dispatch) => {
        const data =await getAllRank()
        dispatch(GetRank(data));
    }
}


// 获取入驻歌手信息
export const asyncGetSonger = () => {
    return async (dispatch) =>{
        const data =await getSonger()
        dispatch(GetSonger(data));
    }
}


// 获取主播榜
export const asyncGetAnchor = () => {
    return async (dispatch) => {
        const data = await getAnchor()
        dispatch(GetAnchor(data));
    }
}

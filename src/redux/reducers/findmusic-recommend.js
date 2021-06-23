import {Map} from "immutable";

// 导入存储type变量的文件
import {BANNERS, HOTALBUM, NEWALBUM, RANKING, SONGER, ANCHOR} from "../constant";


// 存储axios请求到的页面数据
const initData = Map({
    // 推荐页面的轮播图数据
    bannersData: [],
    hotsData: [],
    newAlbum: [],
    ranking: [],
    songer: [],
    anchor: []
})
const recommend = (state = initData, action) => {
    const {type, data} = action;
    switch (type) {
        default:
            return state;
        case BANNERS: // 轮播图数据
            return state.set("bannersData", data)

        case HOTALBUM: // 热点歌单推荐封面
            return state.set("hotsData", data)

        case NEWALBUM: // 新碟歌单推荐
            return state.set("newAlbum",data)

        case RANKING: // 榜单数据
            return state.set("ranking",data)

        case SONGER: // 获取歌手
            return state.set("songer",data);

        case ANCHOR: // 获取主播
            return state.set("anchor", data);
    }
}

export default recommend;


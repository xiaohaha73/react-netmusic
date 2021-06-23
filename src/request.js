// 配置axios的文件
import axios from "axios";

//配置公共的请求头
axios.defaults.baseURL = 'http://123.207.32.32:9001'


// 请求轮播图的函数
export const getBanner = async () => {
    const {data, status} = await axios.get("/banner");
    if (status === 200) {
        const {banners} = data
        return banners;
    }
}

// 请求热门推荐唱片数据
export const getHot = async () => {
    const {data, status} = await axios.get("/personalized", {
        params: {
            limit: 8
        }
    });

    if (status === 200) {
        // 请求成功
        const {result} = data;
        return result;
    }
}


// 请求新碟上架数据
export const getNew = async () => {
    const {data, status} = await axios.get("/top/album", {
        params: {
            limit: 10
        }
    });

    if (status === 200) {
        // 请求成功
        const {albums} = data;
        return albums;
    }
}


// 请求榜单数据
// param: 0 飙升榜 2 新歌榜 3 远程榜
export const getRank = async (idx) => {
    const {data, status} = await axios.get("/top/list", {
        params: {
            idx
        }
    })
    if (status === 200) {
        const {playlist} = data
        return {idx, playlist}
    }

    // 请求失败
    return {}
}

// 获取所有 0 2 3三种类型榜单的数据
export const getAllRank = async () => {
    const idx = [0, 2, 3];
    // 存放数据的数组
    let ret = [];
    for (let i = 0; i < idx.length; i++) {
        ret.push(await getRank(idx[i]))
    }

    return ret;
}


// 获取入驻歌手信息
export const getSonger = async () => {
    const {data, status} = await axios.get("/artist/list", {
        params: {
            limit: 5
        }
    })

    if (status === 200) {
        return data.artists
    }

}


// 获取主播榜
export const getAnchor = async () => {
    // /dj/toplist/popular?limit=5
    const {data, status} = await axios.get("/dj/toplist/popular", {
        params: {
            limit: 5
        }
    })

    if (status === 200) {
        return data.data.list;
    }
}


// 请求歌曲详情
export const songDetail = async (ids = 167595) => {
    // /song/detail?ids=167595
    const {data, status} = await axios.get("/song/detail", {
        params: {
            ids
        }
    })

    if (status === 200) {
        return data.songs;
    }
}


// 请求歌曲的歌词
/**
 *
 * @param id 歌曲的id
 */
export const songLyric = async (id) => {
    // /lyric?id
    const {data,status} = await axios.get("/lyric", {
        params: {
            id
        }
    })

    if (status === 200) {
        return data.lrc;
    }
}


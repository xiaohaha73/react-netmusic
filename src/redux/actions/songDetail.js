// 播放歌曲的详情信息
import {songDetail,songLyric} from "../../request";

import {SONGDETAIL, SONGINDEX, SONGLIST, LYRICLIST, CURRENTLYRIC} from "../constant";

import {randomInt} from "../../utils/random-utils";

import {lyricFormat} from "../../utils/lyric-format-utils";


// 同步处理函数
// 正在播放的歌的详情
export const SongDetail = (data) => ({type: SONGDETAIL, data})

// 歌曲列表中添加歌曲
const addSongList = (data) => ({type: SONGLIST, data})

// 当前播放的歌在列表中的索引值
export const updateSongIndex = (data) => ({type: SONGINDEX, data})

// 存放当前播放的歌曲的歌词
const updateSongLyric = (data) => ({type: LYRICLIST,data})


// 获取歌曲详情的异步函数
export const asyncSongDetail = (song_id = 167595) => {
    // 调用axios函数
    return async (dispatch, getState) => {
        // 根据id查找播放列表中是否已经存在该歌曲
        // const playList = getState().getIn(['songDetail','play_list']);
        const playList = getState().songDetail.get('play_list');
        const songIndex = playList.findIndex((item) => {
            // console.log(item[0].id)
            return item[0].id === song_id
        });

        if (songIndex === -1) {
            // 播放列表没找到这个元素
            // 发送ajax请求歌曲详情
            const data = await songDetail(song_id)
            dispatch(SongDetail(data));
            // 将数据存入播放列表
            let newList = [...playList];
            newList.push(data)
            dispatch(addSongList(newList));
            // 设置播放歌曲id
            dispatch(updateSongIndex(newList.length - 1));
        } else {
            // 播放列表中存在这首歌
            dispatch(updateSongIndex(songIndex));
            dispatch(SongDetail(playList[songIndex]));
        }

        // 获取歌词
        const {lyric} = await songLyric(song_id);
        const lyricList = lyricFormat(lyric);
        // console.log(lyricList)
        // 将歌词保存进redux
        dispatch(updateSongLyric(lyricList))

    }
}


// 切换歌曲的操作函数
export const changeSong = (type, playType) => {
    return async (dispatch, getState) => {
        // 歌曲播放列表
        const playList = getState().songDetail.get('play_list');
        // 当前正在播放歌曲的index值
        const index = getState().songDetail.get("play_song_index");
        // 新的索引值
        let newIndex;
        if (type === "next") {
            // 下一曲模式
            switch (playType) {
                default : // 按列表顺序播放模式
                    newIndex = index + 1;
                    if (index === playList.length - 1) {
                        newIndex = 0; // 如果索引值是最后一个那就切换到播放列表的开头
                    }
                    break;
                case 1: // 随机播放模式
                    newIndex = randomInt(playList.length)
                    while (newIndex === index) {
                        newIndex = randomInt(playList.length)
                    }
                    break;
            }

        } else {
            switch (playType) {
                default : // 列表循环模式
                    newIndex = index - 1;
                    if (index === 0)  {
                        newIndex = playList.length - 1;
                    }
                    break;

                case 1: // 随机播放,还是播放列表的上一曲
                    newIndex = index - 1;
                    if (index === 0)  {
                        newIndex = playList.length - 1;
                    }
                    break;
            }

        }

        // 更新正在播放歌曲的索引值
        dispatch(updateSongIndex(newIndex))
        // 更新正在播放的歌曲
        dispatch(SongDetail(playList[newIndex]))

        const song_id = playList[newIndex][0].id

        // 获取歌词
        const {lyric} = await songLyric(song_id);
        const lyricList = lyricFormat(lyric);
        // console.log(lyricList)
        // 将歌词保存进redux
        dispatch(updateSongLyric(lyricList))

    }

}


// 当前歌曲播放到的歌词信息
/**
 *
 * @param data lyric,index
 * @returns {{data, type: string}}
 */
export const currentLyric = (data) => {
    return {type: CURRENTLYRIC,data};
}

// 根据歌曲id更新歌词列个表
export const asyncUpdateLyric = (id) => {
    return async (dispatch) => {
        // 获取歌词
        const {lyric} = await songLyric(id);
        const lyricList = lyricFormat(lyric);
        // console.log(lyricList)
        // 将歌词保存进redux
        dispatch(updateSongLyric(lyricList))
    }
}



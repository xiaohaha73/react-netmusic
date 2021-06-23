import React, {memo, useState, useRef, useEffect} from 'react';

// 导入样式
import {Detail} from "./style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {formatTime} from "../../utils/format-utils";
import {asyncUpdateLyric, SongDetail, updateSongIndex} from "../../redux/actions/songDetail";

function PlayDetail(props) {

    // useState hook
    // 控制歌曲列表关闭的变量
    const [isClose, setIsClose] = useState(false); // 默认状态不关闭
    // 控制歌词报错按钮弹出的变量
    const [question, setQuestion] = useState(false); // 默认不弹出

    // 连接redux
    // 获取歌曲列表
    const songList = useSelector(state => state.songDetail.get("play_list"), shallowEqual());
    // 当前播放的歌曲的索引值
    const songIndex = useSelector(state => state.songDetail.get("play_song_index"), shallowEqual());
    // 获取歌词
    const lyric_list = useSelector(state => state.songDetail.get("lyric_list"), shallowEqual());
    // 当前播放到的歌词数据
    const current_lyric = useSelector(state => state.songDetail.get("current_lyric"), shallowEqual());
    const dispatch = useDispatch();

    const scrollRef = useRef();

    useEffect(()=> {
        // console.log(scrollRef.current)
        if (current_lyric.index < 3) {
            // 刚开始两行歌词不让他滚动
            return;
        }
        let distance = current_lyric.index*20;
        scrollRef.current.scrollTop = distance;
    },[current_lyric.index]);

    // 绑定的相关事件
    // 歌单列表关闭函数
    const closeHandle = () => {
        setIsClose(isClose => {
            // 将这个是否关闭的变量传递给父组件
            props.setClose(!isClose);
            return !isClose
        })
    }


    // 播放歌曲的函数
    const playHandle = (index) =>{
        dispatch(updateSongIndex(index));
        dispatch(SongDetail(songList[index]));
        const song_id = songList[index][0].id
        dispatch(asyncUpdateLyric(song_id))
    }

    return (
        <Detail>
            <div className="header">
                <div className="list-header">
                    <div className="list-name">播放列表({songList.length})</div>
                    <div className="list-icon">
                        <span>收藏全部</span>
                        <span>清除</span>
                    </div>
                </div>
                <div className="song-header">
                    <div className="song-name">{songList[songIndex][0].name}</div>
                    <span
                        className="close"
                        onClick={closeHandle}
                    />
                </div>
            </div>

            <div className="content">
                <div className="songList">
                    <ul>

                        {songList.map((value,key) => (
                            <li
                                key={key}
                                className={key === songIndex? "activePlay":""}
                                onClick={(e)=> playHandle(key)}
                            >
                                <span className={key === songIndex? "playing":"played"}/>
                                <div className="songName">{value[0].name}</div>
                                <div className="icon">
                                    <span/>
                                    <span/>
                                    <span/>
                                    <span/>
                                </div>
                                <div className="singer">{value[0].ar[0].name}</div>
                                <div className="time">{formatTime(value[0].dt)}</div>
                                <a href="#" className="link"/>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="lyric" ref={scrollRef}>
                    <span
                        className="question"
                        onClick={() => {
                            setQuestion(!question)
                        }}
                    />
                    {
                        question ?
                            <a href="#" className="haveError">报错</a>
                            :
                            ''
                    }
                    <div className="lyric-content">
                        {/*<p className="current-lyric">让我锈迹斑斑躺在墙根 向着那天空望啊望</p>*/}
                        {
                            lyric_list.map((value,key) => (
                                <p
                                    key={key}
                                    className={key === current_lyric.index? "current-lyric":""}
                                >{value.lyric}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Detail>
    );
}

export default memo(PlayDetail);

// 底部的音乐播放组件

import React, {memo, useState, useEffect, useRef, useCallback} from 'react';
import {NavLink} from "react-router-dom";
import {useSelector, useDispatch, shallowEqual} from "react-redux";
import {Slider} from "antd";
import {CSSTransition} from "react-transition-group";

// 导入播放详情弹窗组件
import PlayDetail from "./playDetail";

// 时间格式化函数
import {formatTime} from "../../utils/format-utils";
import {asyncSongDetail, changeSong, currentLyric} from "../../redux/actions/songDetail";

// 导入样式
import {Player} from './style';

function AppPlayer(props) {

    // 连接redux
    // 获取歌曲列表
    const songList = useSelector(state => state.songDetail.get("play_list"), shallowEqual());
    // 获取到的歌曲信息
    const song = useSelector(state => state.songDetail.get("song_detail"), shallowEqual());
    // 获取歌词列表
    const lyricList = useSelector(state => state.songDetail.get("lyric_list"), shallowEqual());
    // 获取当前播放到的歌词的索引值
    const lyricItem = useSelector(state => state.songDetail.get("current_lyric"), shallowEqual());
    const dispatch = useDispatch(); // 获取dispatch

    // useEffect hook
    useEffect(() => {
        dispatch(asyncSongDetail())
        // 给audio传递播放地址
    }, [dispatch])

    // 处理渲染的数据
    const imgUrl = song.length !== 0 ? (song[0].al.picUrl + '?param=34y34') : ''; // 图片
    const name = song.length !== 0 ? song[0].name : ''; // 歌曲名称
    const singer = song.length !== 0 ? song[0].ar[0].name : '群星'; // 歌手名称
    const id = song.length !== 0 ? song[0].id : 0; // 歌曲id
    const dt = song.length !== 0 ? song[0].dt : 0; // 歌曲总时长


    // useState hook
    // 控制播放栏弹出的变量
    const [toggle, setToggle] = useState(false);
    // 控制播放栏是否锁定的变量
    const [isLock, setIsLock] = useState(false);
    // 控制音量调节滑块的显示和隐藏
    const [sliderShow, setSliderShow] = useState(false); // 默认隐藏
    // 控制播放按钮的切换
    const [stop, setStop] = useState(false); // 默认为false
    // 播放歌曲的实时时间
    const [currentTime, setCurrentTime] = useState(0);
    // 设置进度条时值
    const [process, setProcess] = useState(0);
    // 控制进度条时值重置的flag
    const [currentFlag, setCurrentFlag] = useState(false); // 默认设置为false
    // 控制播放的音量是否为静音
    const [quietFlag, setQuietFlag] = useState(false); // 默认不是静音
    // 控制歌曲列表是否弹出的flag
    const [ListFlag, setListFlag] = useState(true); // 默认为关闭状态
    // 控制播放歌曲的方式
    const [playType, setPlayType] = useState(0); // 0 列表循环 1 随机播放 2 单曲循环

    // useRef hook
    const audioRef = useRef(); // 获取audio播放器dom


    // useEffect hook
    useEffect(() => {
        audioRef.current.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
        // 设置歌曲自动播放
        audioRef.current.play().then(res => {
            setStop(true);
        }).catch(err => {
            setStop(false);
        });
        if (localStorage.getItem('lock_play') === null) {
            localStorage.setItem('lock_play', isLock)
        }
        setIsLock(eval(localStorage.getItem('lock_play')))
    }, [id])


    // 事件函数
    // 锁定播放栏事件函数
    const lockedHandle = () => {
        setIsLock(!isLock);
        localStorage.setItem('lock_play', !isLock)
    }


    // 播放事件函数
    const playHandle = (id) => {
        // 设置默认的音量
        audioRef.current.volume = 0.12;
        // audioRef.current.play(); // 让audio播放
        stop ? audioRef.current.pause() : audioRef.current.play();
        setStop(!stop);
    }

    // 监听audio播放进度的函数
    const watchTime = (e) => {
        setCurrentTime(e.target.currentTime * 1000);
        // 根据currentFlag判断当前是否更改过歌曲进度
        // 默认不改变进度的情况下歌曲进度从0到结束
        if (currentFlag) {
            setProcess(currentTime / dt * 100);
        }

        // 根据播放的歌曲的时间获取当前的歌词
        let current_lyric = '';
        let current_index = 0;
        for (let i in lyricList) {
            // console.log(lyricList[i].time)
            if (currentTime < lyricList[i].time) {
                current_lyric = lyricList[i-1].lyric;
                current_index = i-1;
                break;
            }

        }

        if (lyricItem.index !== current_index) {
            dispatch(currentLyric({index:current_index,lyric:current_lyric}))
        }

    }

    // 播放进度条监听函数
    // 进度条滑动事件
    const processOnChange = useCallback((value) => {
        // 滑动过程中的进度值不让设置成歌曲进度，只有鼠标抬起才让
        setCurrentFlag(false);
        // 计算滑动的时间值
        setCurrentTime(parseInt((value / 100) * dt));
        setProcess(value);
    }, [currentTime]);

    // 点击进度条滑动鼠标抬起事件
    const processAfterChange = useCallback((value) => {
        // 鼠标抬起将CurrentFlag设置成允许的状态
        setCurrentFlag(true);
        setProcess(value);
        // 重新设置歌曲播放的时值
        audioRef.current.currentTime = ((value / 100) * dt) / 1000;
        // 计算滑动的时间值
        setCurrentTime(parseInt((value / 100) * dt));
    }, [currentTime]);

    // 音量调节滑动事件
    const volumeHandle = useCallback((value) => {
        // 将静音控制改为默认的false
        setQuietFlag(false);
        // 将音量播放器的音量设置为value
        audioRef.current.volume = value;
        // 如果音量为0就改为静音状态
        if (value === 0) {
            setQuietFlag(true);
        }
    }, [quietFlag]);


    // 控制歌曲列表开关的函数
    const ListCloseHandle = (flag) => {
        setListFlag(flag);
    }

    // 控制切换单曲循环，循环播放，随机播放的函数
    const PlayTypeHandle = () => {
        setPlayType(playType => {
            if (playType + 1 === 3) {
                return 0
            }
            return playType + 1
        })

    }

    // 切换歌曲点击函数
    const nextSong = (type, playType) => {
        // console.log(type)
        // 单曲循环模式
        if (playType === 2) {
            audioRef.current.currentTime = 0;
            setProcess(0);
            setCurrentFlag(true);
            setCurrentTime(0);
            audioRef.current.play();
        }else {
            dispatch(changeSong(type, playType));
        }
    }


    return (
        <CSSTransition
            classNames={isLock ? '' : 'play-box'}
            timeout={600}
            in={!toggle}
            appear
        >
            <Player
                onMouseEnter={() => {
                    setToggle(true)
                }}
                onMouseLeave={() => {
                    setToggle(false)
                }}
                className={isLock ? 'play-locked' : ''}
            >
                <div id="play-box">
                    {/*锁定播放组件的按钮*/}
                    <div
                        className="lock"
                        onClick={lockedHandle}
                    >
                        <em className={!isLock ? '' : 'locked'}/>
                    </div>

                    <div className="main">
                        {/*左侧播放按钮*/}
                        <div className="play-icons">
                            {/*后退按钮*/}
                            <span
                                className="pre-icon"
                                onClick={e => nextSong("pre", playType)}
                            />
                            {/*播放按钮*/}
                            <span className={!stop ? 'play-icon' : 'play-icon play-stop'}
                                  onClick={() => playHandle(id)}/>
                            {/*前进按钮*/}
                            <span
                                className="net-icon"
                                onClick={e => nextSong("next", playType)}
                            />
                        </div>

                        {/*歌曲信息进度条*/}
                        <div className="song-process">
                            <img src={imgUrl} alt=""/>
                            <NavLink to="/findmusic/song">
                                <div className="mask"/>
                            </NavLink>
                            <div className="song-detail">
                                <div className="title">
                                    歌曲： <a href="#" className="name">{name}<em>歌曲:{name}</em></a>
                                    <a href="#" className="singer">{singer}<em>{singer}</em></a>
                                    <a href="#" className="link"><em>来自榜单</em></a>
                                </div>
                                <div className="process">
                                    {/*进度条*/}
                                    <Slider
                                        value={process}
                                        onAfterChange={processAfterChange}
                                        onChange={processOnChange}
                                    />
                                    {/*显示*/}
                                    <div className="time">{formatTime(currentTime)} <span>/ {formatTime(dt)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*右边的其他按钮*/}
                        <div className="right-icons">
                            {/*收藏按钮*/}
                            <span className="add"><em>收藏</em></span>
                            {/*分享按钮*/}
                            <span className="share"><em>分享</em></span>
                            {/*声音控制按钮*/}
                            <span className={quietFlag ? 'volume quiet' : 'volume'}
                                  onClick={(e) => setSliderShow(!sliderShow)}
                            />
                            {
                                sliderShow ?
                                    <div className="adjust">
                                        <Slider
                                            vertical
                                            min={0}
                                            max={1}
                                            step={0.01}
                                            defaultValue={0.12}
                                            tooltipVisible={false}
                                            onChange={volumeHandle}
                                        />
                                    </div>
                                    :
                                    ''
                            }
                            {/*播放模式*/}
                            {playType === 0 ? <span
                                className="play-type"
                                onClick={PlayTypeHandle}
                            >
                                <em>循环</em>
                            </span> : ''}

                            {playType === 1 ? <span
                                className="ran-play"
                                onClick={PlayTypeHandle}
                            >
                                <em>随机播放</em>
                            </span> : ''}

                            {playType === 2 ? <span
                                className="one-play"
                                onClick={PlayTypeHandle}
                            >
                                <em>循环</em>
                            </span> : ''}


                            {/*歌单*/}
                            <span
                                className="song-list"
                                onClick={() => {
                                    setListFlag(!ListFlag)
                                }}
                            >
                                {songList.length}
                                <em>播放列表</em>
                            </span>
                        </div>

                        {/*播放详情弹窗组件*/}
                        {
                            ListFlag ? '' : <PlayDetail setClose={ListCloseHandle}/>
                        }

                    </div>

                    {/*音频播放器*/}
                    <audio
                        ref={audioRef}
                        onTimeUpdate={watchTime}
                        src={"https://music.163.com/song/media/outer/url?id=" + id + ".mp3"}
                        onEnded={e => nextSong("next", playType)}
                    />
                </div>
            </Player>
        </CSSTransition>
    );
}

export default memo(AppPlayer);


import React ,{memo,useState}from 'react';


// 导入style样式
import SongDetail from "./style";
import {shallowEqual, useSelector} from "react-redux";

function Detail(props) {

    // redux获取当前这首歌的详细信息
    const song_detail = useSelector(state => state.songDetail.get("song_detail"), shallowEqual());
    const info = song_detail[0];
    // 获取歌词
    const lyric_list = useSelector(state => state.songDetail.get("lyric_list"), shallowEqual());

    // 控制歌词展开和收起的变量
    const [showMore, setShowMore] = useState(false); // 默认关闭


    return (
        <SongDetail>
            <div>
                <div className="container">
                    <div className="detail-left">
                        <div className="alum">

                        </div>
                        <div className="songImg">
                            <img src={info.al.picUrl} alt=""/>
                            <span className="songMask"/>
                            <a href="" className="linkPlay"><span/> 生成外链播放器</a>
                        </div>

                        <div className="songDetail">
                            <div className="title">{info.name}</div>
                            <div className="singer desc">
                                歌手：<a href="">{info.ar[0].name}</a>
                            </div>
                            <div className="album desc">
                                所属专辑：<a href="">{info.al.name}</a>
                            </div>

                            <div className="icon-group">
                                <div className="blue-group">
                                    <div className="play">
                                        <span><em/>播放</span>
                                    </div>
                                    <div className="add"/>
                                </div>

                                <div className="collect primary-btn">收藏<span/></div>

                                <div className="share primary-btn">分享<span/></div>

                                <div className="download primary-btn">下载<span/></div>

                                <div className="comment primary-btn">(1812)<span/></div>

                            </div>

                            <div className="lyric">
                                {
                                    lyric_list.map((value,key) => {
                                        if (key < 15) {
                                            return (<p key={key}>{value.lyric}</p>)
                                        }

                                        return (<p key={key} hidden={!showMore}>{value.lyric}</p>)
                                    })
                                }

                                <span
                                    className={showMore?"show-more up-arrow":"show-more down-arrow"}
                                    onClick={()=> setShowMore(!showMore)}
                                >
                                    {!showMore? '展开':'收起'}
                                </span>
                            </div>
                            <div className="detail-bottom">
                                <a href="" className="report">报错</a>
                                <div className="translator">歌词贡献者: <a href="">张三</a></div>
                            </div>
                        </div>
                    </div>


                    <div className="detail-right">
                        <div className="playlists">
                            <div className="title">
                                包含这首歌的歌单
                            </div>
                            <div className="lists">
                                <div className="list-item">
                                    <div className="item-over">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="item-right">
                                        <a className="item-name">
                                            不出意外 这辈子再也见不到你了
                                        </a>
                                        <div className="author">
                                            by <a>王某人</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-item">
                                    <div className="item-over">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="item-right">
                                        <a className="item-name">
                                            不出意外 这辈子再也见不到你了
                                        </a>
                                        <div className="author">
                                            by <a>王某人</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-item">
                                    <div className="item-over">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="item-right">
                                        <a className="item-name">
                                            不出意外 这辈子再也见不到你了
                                        </a>
                                        <div className="author">
                                            by <a>王某人</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="recommend">
                            <div className="title">
                                相似歌曲
                            </div>
                            <div className="song-lists">
                                <div className="song">
                                    <span className="song-name">春天到万家</span>
                                    <div className="singer">
                                        <a href="">张也</a>/<a href="">周深</a>
                                    </div>
                                </div>
                                <div className="button">
                                    <span className="play"/>
                                    <span className="collect" />
                                </div>
                            </div>
                            <div className="song-lists">
                                <div className="song">
                                    <span className="song-name">春天到万家</span>
                                    <div className="singer">
                                        <a href="">张也</a>/<a href="">周深</a>
                                    </div>
                                </div>
                                <div className="button">
                                    <span className="play"/>
                                    <span className="collect" />
                                </div>
                            </div>
                            <div className="song-lists">
                                <div className="song">
                                    <span className="song-name">春天到万家</span>
                                    <div className="singer">
                                        <a href="">张也</a>/<a href="">周深</a>
                                    </div>
                                </div>
                                <div className="button">
                                    <span className="play"/>
                                    <span className="collect" />
                                </div>
                            </div>
                            <div className="song-lists">
                                <div className="song">
                                    <span className="song-name">春天到万家</span>
                                    <div className="singer">
                                        <a href="">张也</a>/<a href="">周深</a>
                                    </div>
                                </div>
                                <div className="button">
                                    <span className="play"/>
                                    <span className="collect" />
                                </div>
                            </div>

                        </div>

                        <div className="download">
                            <div className="title">
                                网易云音乐多端下载
                            </div>
                            <div className="down-icon">
                                <a href="" className="ios"></a>
                                <a href="" className="win"></a>
                                <a href="" className="and"></a>
                            </div>

                            <span>同步歌单，随时畅听320k好音乐</span>
                        </div>

                        <div className="edit-song">
                            <a href="">补充或修改歌曲资料></a>
                        </div>
                    </div>
                </div>
            </div>
        </SongDetail>
    );
}

export default memo(Detail);

import React, {memo} from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {asyncSongDetail} from "../../../../../../redux/actions/songDetail";
// 导入精灵图
import icon from "../../../../../../assets/img/sprite_02.png";
import cover from "../../../../../../assets/img/sprite_cover.png"
import shadow from "../../../../../../assets/img/recommend-top-bg.png"
import icon2 from "../../../../../../assets/img/sprite_icon2.png";

function TopRank(props) {

    const {className} = props;
    const [hotSong, newSong, orSong] = props.ranking;

    return (
        <Rank className={className ? className : ''}>
            {/*飙升榜*/}
            <RankItem
                className="rank-item left-rank"
                songData={hotSong}
            />
            {/*新歌榜*/}
            <RankItem
                className="rank-item center-rank"
                songData={newSong}
            />
            {/*原创榜*/}
            <RankItem
                className="rank-item right-rank"
                songData={orSong}
            />
        </Rank>
    );
}

export default memo(TopRank);


// 再抽离出一个子组件，用来渲染三个榜单的子组件]
function RankItem(props) {

    // 连接redux
    // const song = useSelector(state => state.songDetail.get("song_detail"), shallowEqual()); // 获取到的歌曲信息
    const dispatch = useDispatch(); // 获取dispatch

    const {className, songData} = props;
    const songList = songData ? songData.playlist.tracks.slice(0, 10) : [];


    // 播放音乐函数
    function playMusic(item) {
        // console.log(item.id)
        // 调用封装好的redux的action函数
        dispatch(asyncSongDetail(item.id))
    }


    return (
        <div className={className ? className : ''}>
            <div className="rank-title">
                <div className="title-left">
                    <img src={songData && songData.playlist.coverImgUrl + '?param=100y100'} alt=""/>
                </div>
                <div className="title-right">
                    <p className="title">{songData && songData.playlist.name}</p>
                    <div className="icon">
                        <a href="#" className="player"></a>
                        <a href="#" className="collect"></a>
                    </div>
                </div>
            </div>
            <div className="rank-content">
                <ul>
                    {
                        songList.map((item, id) => (
                            <li key={id}>
                                <h3>{id + 1}</h3>
                                <a className="song-link" href="#">{item.name}</a>
                                <div className="hover-button">
                                    <span className="play"
                                          onClick={(e)=>playMusic(item)}
                                    />
                                    <span className="add"></span>
                                    <span className="collect"></span>
                                </div>
                            </li>
                        ))
                    }


                    {/*查看全部*/}
                    <li>
                        <a href="#" className="check-all">查看全部></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}


const Rank = styled.div`
  display: flex;
  flex-direction: row;

  .rank-item {
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    //排行榜标题样式
    .rank-title {
      width: 100%;
      height: 120px;
      display: flex;
      flex-direction: row;
      padding: 20px;

      .title-left {
        position: relative;
        display: block;
        width: 80px;
        height: 80px;
        //底边阴影效果
        &::before {
          content: '';
          position: absolute;
          width: 102px;
          height: 19px;
          background: url("${shadow}") -9px -100px;
          bottom: -17px;
          left: -11px;
        }

        &::after {
          content: '';
          position: absolute;
          width: 80px;
          height: 80px;
          background: url("${cover}") -145px -57px;
          top: 0;
          left: 0;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }

      .title-right {
        margin-left: 10px;

        .title {
          color: #242424;
          font-size: 16px;
          font-weight: bold;
        }

        .icon {
          display: flex;
          flex-direction: row;

          a {
            display: block;
            height: 22px;
            width: 22px;
            background: url("${icon}");

          }

          .player {
            background-position: -267px -205px;

            &:hover {
              background-position: -267px -235px;
            }
          }

          .collect {
            margin-left: 10px;
            background-position: -299px -206px;

            &:hover {
              background-position: -299px -236px;
            }
          }

          // 已收藏图标样式
          .collected {
            background-position: -329px -236px !important;
          }
        }
      }
    }

    // 排行榜内容
    .rank-content {

      > ul {
        display: flex;
        flex-direction: column;

        li {
          box-sizing: border-box;
          position: relative;
          height: 32px;
          line-height: 32px;
          width: 100%;
          padding-left: 17px;
          display: flex;
          flex-direction: row;

          &:nth-child(2n-1) {
            background: #e8e8e8;
          }

          &:nth-child(2n) {
            background: #f4f4f4;
          }

          &:hover .hover-button {
            display: block;
          }

          &:hover .song-link {
            width: 80px;
          }

          h3 {
            display: block;
            width: 20px;
            text-align: center;
            color: #666;
            font-size: 16px;
          }

          &:nth-child(1), &:nth-child(2), &:nth-child(3) {
            h3 {
              color: #c10d0c;
            }
          }

          .song-link {
            color: #000;
            margin-left: 10px;
            display: block;
            width: 170px;
            height: 32px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;

            &:hover {
              text-decoration: underline;
            }
          }

          .hover-button {
            display: none;
            position: absolute;
            width: 90px;
            height: 32px;
            top: 0;
            right: 0;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;

            span {
              margin-top: 8px;
              margin-left: 8px;
              float: left;
              height: 15px;
              width: 15px;
              background: url("${icon2}") 0 -699px;

              &:hover {
                background-position: -22px -699px;
              }
            }

            .play {
              height: 18px;
              width: 18px;
              background: url("${icon}") -267px -267px;

              &:hover {
                background-position: -267px -287px;
              }
            }

            .collect {
              height: 18px;
              width: 18px;
              background: url("${icon}") -296px -269px;

              &:hover {
                background-position: -296px -289px;
              }
            }

            .collect, .add {
              margin-top: 10px;
            }

          }

          .check-all {
            color: #000;
            position: absolute;
            right: 32px;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  .center-rank {
    border-left: 2px solid #d3d3d3;
    border-right: 2px solid #d3d3d3;
  }
`;

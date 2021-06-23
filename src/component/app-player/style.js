import styled from "styled-components";
// 导入背景图片
import bg from "../../assets/img/playbar.png";
import rail from "../../assets/img/statbar.png";
import icon from "../../assets/img/sprite_icon.png";
import icon2 from "../../assets/img/playlist.png";

// 播放组件样式
export const Player = styled.div`
  padding-top: 14px;
  height: 67px;
  width: 100%;
  position: fixed;
  z-index: 6;
  //bottom: 0;
  bottom: -42px;
  left: 0;

  #play-box {
    height: 53px;
    width: 100%;
    background: url("${bg}") 0 0 repeat-x;
  }

  // 锁定图标的样式
  .lock {
    position: absolute;
    right: -8px;
    bottom: 0;
    width: 67px;
    height: 65px;
    background: url("${bg}") 0 -382px;
    z-index: 7;
    cursor: pointer;

    em {
      // 未锁定
      position: absolute;
      top: 8px;
      left: 18px;
      width: 17px;
      height: 15px;
      background: url("${bg}") -81px -382px;

      &:hover {
        background-position: -81px -402px;
      }
    }

    // 锁定样式
    .locked {
      width: 14px;
      height: 15px;
      background: url("${bg}") -101px -381px !important;

      &:hover {
        background-position: -101px -401px !important;
      }
    }
  }

  .main {
    width: 982px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px 0 2px 0;
    position: relative;
    // 左侧播放按钮
    .play-icons {
      width: 130px;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;

      span {
        margin-top: 2px;
        cursor: pointer;

      }

      .pre-icon {
        width: 25px;
        height: 26px;
        background: url("${bg}") -1px -130px;

        &:hover {
          background-position: -31px -130px;
        }
      }

      .play-icon {
        width: 35px;
        height: 35px;
        background: url("${bg}") -1px -204px;
        margin-left: 11px;

        &:hover {
          background-position: -41px -204px;
        }
      }

      // 播放暂停按钮
      .play-stop {
        width: 35px;
        height: 35px;
        background: url("${bg}") -1px -165px !important;

        &:hover {
          background-position: -41px -165px !important;
        }
      }

      .net-icon {
        width: 25px;
        height: 26px;
        background: url("${bg}") -81px -130px;
        margin-left: 10px;

        &:hover {
          background-position: -111px -130px;
        }
      }
    }

    // 中间歌曲显示区域
    .song-process {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: row;
      padding: 10px 0;
      position: relative;

      > img {
        width: 34px;
        height: 34px;
        border-radius: 5px;
        overflow: hidden;
      }

      .mask {
        position: absolute;
        content: '';
        width: 35px;
        height: 35px;
        top: 9px;
        left: 0;
        background: url("${bg}") 0 -80px;
        z-index: 3;
      }

      .song-detail {
        display: flex;
        flex-direction: column;
        flex: 1;

        .title {
          color: white;
          padding-left: 20px;
          margin-top: -2px;
          display: flex;
          flex-direction: row;

          a {
            position: relative;
            color: #e8e8e8;

            &:hover {
              text-decoration: underline;
            }
          }

          .name {
            &:hover em {
              display: block;
            }

            em {
              display: none;
              position: absolute;
              color: white;
              background: #292a2d;
              padding: 2px 5px;
              border: 1px solid white;
              top: 16px;
              white-space: nowrap;
              left: 5px;
              z-index: 5;
            }
          }

          .singer {
            color: #9b9b9b;
            margin-left: 20px;

            &:hover em {
              display: block;
            }

            em {
              display: none;
              position: absolute;
              color: white;
              background: #292a2d;
              padding: 2px 5px;
              border: 1px solid white;
              top: 16px;
              white-space: nowrap;
              left: 5px;
              z-index: 5;
            }
          }

          .link {
            width: 16px;
            height: 16px;
            background: url("${bg}") -109px -102px;
            margin-left: 15px;

            &:hover {
              background-position: -129px -102px;
            }

            &:hover em {
              display: block;
            }

            em {
              display: none;
              position: absolute;
              color: white;
              background: #292a2d;
              padding: 2px 5px;
              border: 1px solid white;
              top: 16px;
              white-space: nowrap;
              left: 5px;
              z-index: 5;
            }
          }
        }

        .process {
          display: flex;
          flex-direction: row;
          padding-left: 15px;
          width: 100%;

          .ant-slider {
            width: 493px;
            margin-top: 4px;

            .ant-slider-rail {
              height: 9px;
              width: 493px;
              background: url("${rail}") 0 -30px;
            }

            .ant-slider-track {
              height: 9px;
              background: url("${rail}") 0 -66px;
            }

            .ant-slider-handle {
              width: 20px;
              height: 21px;
              background: url("${icon}") -1px -251px;
              border: none;
              margin-top: -6px;

              &:hover {
                background-position: -1px -281px;
              }

              &:focus {
                border: none;
                box-shadow: none;
              }
            }


          }

          .time {
            margin-left: 10px;
            margin-top: 3px;
            color: #a1a1a1;

            span {
              color: #797979;
            }
          }
        }
      }

    }

    // 右侧的其他按钮
    .right-icons {
      width: 200px;
      height: 100%;
      display: flex;
      flex-direction: row;
      margin-top: 29px;
      position: relative;

      > span {
        margin-left: 10px;
        position: relative;

        &:hover em {
          display: block;
        }

        em {
          display: none;
          position: absolute;
          color: white;
          background: #292a2d;
          padding: 0 5px;
          border: 1px solid white;
          top: 14px;
          white-space: nowrap;
          left: 5px;
          z-index: 5;
        }
      }

      .add {
        width: 21px;
        height: 21px;
        background: url("${bg}") -90px -165px;

        &:hover {
          background-position: -90px -191px;
        }
      }

      .share {
        width: 21px;
        height: 20px;
        background: url("${bg}") -116px -166px;
        position: relative;

        &:hover {
          background-position: -116px -192px;
        }

        &::before {
          content: '';
          position: absolute;
          left: 30px;
          top: -4px;
          width: 5px;
          height: 24px;
          background: url("${bg}") -147px -249px;
        }
      }

      // 音量按钮
      .volume {
        width: 23px;
        height: 21px;
        background: url("${bg}") -3px -250px;
        margin-left: 24px;

        &:hover {
          background-position: -32px -250px;
        }
      }

      // 静音图标
      .quiet {
        width: 23px;
        height: 21px;
        background: url("${bg}") -109px -70px !important;

        &:hover {
          background-position: -130px -70px !important;
        }
      }


      // 调节音量滑块样式
      .adjust {
        padding-top: 5px;
        padding-bottom: 8px;
        position: absolute;
        width: 32px;
        height: 113px;
        background: url("${bg}") 0 -503px;
        bottom: 60px;
        left: 77px;
        line-height: 113px;

        .ant-slider-vertical {
          height: 91%;
        }

        .ant-slider-rail {
          background: #191919;
        }

        .ant-slider-track {
          background: #c70c0c;
        }

        .ant-slider-handle {
          border: none;
          box-shadow: none;
          width: 17px;
          height: 18px;
          right: -3px;
          background: url("${icon}") -41px -250px;

          &:hover {
            background-position: -41px -281px;
          }
        }
      }

      // 列表循环播放样式
      .play-type {
        width: 22px;
        height: 21px;
        background: url("${bg}") -5px -346px;

        &:hover {
          background-position: -35px -346px;
        }
      }

      // 随机播放模式
      .ran-play {
        width: 22px;
        height: 20px;
        background: url("${bg}") -68px -250px;

        &:hover {
          background-position: -95px -250px;
        }
      }

      // 单曲循环
      .one-play {
        width: 21px;
        height: 19px;
        background: url("${bg}") -68px -346px;

        &:hover {
          background-position: -95px -346px;
        }
      }

      // 播放列表
      .song-list {
        width: 60px;
        height: 25px;
        line-height: 25px;
        background: url("${bg}") -44px -69px;
        color: #666;
        text-align: right;
        padding-right: 6px;
        user-select: none;
        &:hover {
          background-position: -44px -99px;
        }
      }
    }

  }
`;


// 播放详情弹窗样式
export const Detail = styled.div`
  position: absolute;
  z-index: 10000;
  width: 986px;
  height: 301px;
  bottom: 47px;
  right: -10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: 0 -2px 6px #1f1f1f;
  background: #1f1f1f;
  color: #e2e2e2;

  .header {
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    display: flex;
    flex-direction: row;

    .list-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 555px;
      border-right: 1px solid #454746;
      padding-left: 25px;
      padding-right: 10px;
      box-sizing: border-box;

      .list-name {
        font-size: 14px;
        font-weight: bold;
      }

      .list-icon {
        span {
          position: relative;
          padding: 0 10px;
          color: #cccccc;

          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }

          &:nth-child(1) {
            border-right: 1px solid #454746;

            &::before {
              position: absolute;
              content: '';
              width: 19px;
              height: 16px;
              left: -14px;
              top: 1px;
              background: url("${icon2}") -22px 0;
            }
          }

          &:nth-child(2) {
            margin-left: 20px;

            &::before {
              position: absolute;
              content: '';
              width: 19px;
              height: 16px;
              left: -12px;
              top: 1px;
              background: url("${icon2}") -48px 0;
            }
          }
        }
      }
    }

    .song-header {
      flex: 1;
      position: relative;
      text-align: center;

      .song-name {
        font-size: 14px;
        color: white;
      }

      .close {
        width: 12px;
        height: 11px;
        position: absolute;
        right: 20px;
        top: 16px;
        background: url("${icon2}") -204px 0;
        cursor: pointer;

        &:hover {
          background-position: -204px -30px;
        }
      }
    }
  }

  .content {
    display: flex;
    flex-direction: row;
    height: 261px;
    overflow: hidden;
    border-top: 1px solid #262626;

    .songList {
      overflow-y: scroll;
      background: rgba(29, 29, 29);
      width: 557px;
      height: 100%;
      box-sizing: border-box;
      // 滚动条样式
      &::-webkit-scrollbar {
        width: 6px;
        background: #0f1110;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: #454746;
        border: 1px solid #595b5a;
      }


      ul {
        margin-top: 1px;
        //height: 1000px;

        li {
          height: 28px;
          line-height: 28px;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          position: relative;
          color: #9b9b9b;

          &:hover {
            color: white;
            background: #141919;
          }

          &:hover .songName {
            color: white;
          }

          &:hover .time {
            color: white;
          }

          &:hover .icon {
            display: block;
          }

          .playing {
            display: none;
            position: absolute;
            left: 6px;
            top: 8px;
            width: 13px;
            height: 13px;
            background: url("${icon2}") -180px 0;
          }

          .songName {
            color: #c1c1c1;
            position: absolute;
            left: 27px;
          }

          .icon {
            display: none;
            position: absolute;
            right: 167px;
            top: 0;
            height: 28px;
            width: 100px;

            span {
              display: inline-block;
              margin-left: 5px;
              margin-top: 5px;
              width: 20px;
              height: 17px;
              background: url("${icon2}");

              &:nth-child(1) {
                background-position: -22px 0;

                &:hover {
                  background-position: -22px -20px;
                }
              }

              &:nth-child(2) {
                width: 15px;
                height: 15px;
                background-position: 0 0;

                &:hover {
                  background-position: 0 -20px;
                }
              }

              &:nth-child(3) {
                background-position: -54px -50px;

                &:hover {
                  background-position: -77px -50px;
                }
              }

              &:nth-child(4) {
                background-position: -47px 0;

                &:hover {
                  background-position: -47px -20px;
                }
              }
            }
          }


          .singer {
            width: 70px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            position: absolute;
            right: 86px;
          }

          .time {
            color: #666666;
            position: absolute;
            right: 50px;
          }

          .link {
            width: 20px;
            height: 16px;
            background: url("${icon2}") -77px 0;
            position: absolute;
            right: 10px;
            top: 6px;

            &:hover {
              background-position: -77px -20px;
            }
          }
        }

        // 播放歌曲li的样式
        .activePlay {
          color: white;
          background: #141919;

          .playing {
            display: block;
          }

          .songName, .time {
            color: white;
          }
        }
      }
    }

    .lyric {
      flex: 1;
      position: relative;
      padding: 0 40px 0 40px;
      overflow-y: scroll;
      // 滚动条样式
      &::-webkit-scrollbar {
        width: 6px;
        background: #0f1110;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: #454746;
        border: 1px solid #595b5a;
      }
      
      .question {
        position: absolute;
        width: 22px;
        height: 24px;
        top: 10px;
        right: 23px;
        background: url("${icon2}") 0 -48px;
        &:hover {
          background-position: -24px -48px;
        }
      }
      
      .haveError {
        background: #ebebeb;
        padding: 8px;
        width: 80px;
        cursor: pointer;
        text-align: center;
        position: absolute;
        top: 40px;
        right: 4px;
        &:hover {
          background: #dedede;
        }
      }
      
      .lyric-content {
        //height: 1000px;
        margin-top: 40px;
        width: 100%;
        text-align: center;
        
        p {
          height: 21px;
          color: #989898;
        }
        
        .current-lyric {
          color: white;
          font-size: 15px;
        }
        
      }
    }
  }
`;



import styled from "styled-components";
import cover from "../../../../../assets/img/sprite_cover.png";
import icon from "../../../../../assets/img/sprite_icon2.png";
import button from "../../../../../assets/img/sprite_button.png";
import icon2 from "../../../../../assets/img/icon2.png";
import cover2 from "../../../../../assets/img/download_sprite.png";

const SongDetail = styled.div`
  width: 100%;

  .container {
    width: 982px;
    margin: 0 auto;
    background: white;
    border-right: 1px solid #d3d3d3;
    border-left: 1px solid #d3d3d3;
    display: flex;
    flex-direction: row;


    // 左侧播放详情样式
    .detail-left {
      padding-top: 15px;
      width: 709px;
      //height: 260px;
      border-right: 1px solid #d3d3d3;
      display: flex;
      flex-direction: row;

      .songImg {
        width: 234px;
        height: 234px;
        position: relative;
        box-sizing: border-box;
        padding: 13px;

        img {
          width: 130px;
          height: 130px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .songMask {
          top: 11px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          position: absolute;
          width: 219px;
          height: 218px;
          background: url("${cover}") -133px -577px;
        }

        .linkPlay {
          text-decoration: underline;
          cursor: pointer;
          color: #0c73c2;
          position: absolute;
          bottom: -20px;
          left: 76px;

          &::after {
            position: absolute;
            left: -17px;
            top: 0;
            content: "";
            width: 16px;
            height: 18px;
            background: url("${icon}") -34px -862px;
          }
        }
      }

      .songDetail {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        box-sizing: border-box;
        padding-left: 10px;
        position: relative;

        .title {
          position: relative;
          font-size: 25px;
          padding-left: 64px;
          color: #333333;

          &::after {
            position: absolute;
            content: "";
            width: 55px;
            height: 28px;
            background: url("${icon}") 0 -461px;
            top: 7px;
            left: 0;
          }

        }

        .desc {
          margin-top: 10px;
          color: #9999b3;

          a {
            color: #0c73c2;

            &:hover {
              text-decoration: underline;
            }
          }
        }

        .icon-group {
          display: flex;
          flex-direction: row;
          height: 30px;
          margin-top: 10px;

          .blue-group {
            display: flex;
            flex-direction: row;
            cursor: pointer;

            .play {
              height: 30px;
              width: 67px;
              background: url("${button}") 0 -633px;
              line-height: 30px;
              text-align: center;

              &:hover {
                background: url("${button}") 0 -719px;
              }


              span {
                color: white;
                font-weight: bold;
                position: relative;
                padding-left: 24px;
              }
            }

            .add {
              width: 33px;
              height: 30px;
              background: url("${button}") 0 -1588px;

              &:hover {
                background: url("${button}") -40px -1588px;
              }
            }

          }

          .primary-btn {
            cursor: pointer;
            margin-left: 10px;
            position: relative;
            text-align: center;
            padding-left: 30px;
            padding-right: 5px;
            background: url("${button}");
            height: 30px;
            line-height: 30px;

            span {
              position: absolute;
              right: -3px;
              top: 0;
              width: 5px;
              height: 30px;
              background: url("${button}") -245px -1020px;
            }

          }

          .collect {
            background-position: 0 -977px;
          }

          .share {
            background-position: 0 -1225px;
          }

          .download {
            background-position: 0 -2761px;
          }

          .comment {
            background-position: 0 -1465px;
          }

        }

        .lyric {
          margin-top: 50px;
          margin-bottom: 100px;

          .f-hide {
            overflow: hidden;
          }

          .show-more {
            margin-top: 15px;
            display: block;
            width: 50px;
            color: #0ca2de;
            cursor: pointer;
            position: relative;

            &:hover {
              text-decoration: underline;
            }
          }

          .down-arrow {
            &::after {
              content: "";
              height: 13px;
              width: 13px;
              position: absolute;
              background: url("${icon}") -64px -517px;
              right: 10px;
              top: 2px;
            }
          }

          .up-arrow {
            &::after {
              content: "";
              height: 13px;
              width: 13px;
              position: absolute;
              background: url("${icon}") -44px -517px;
              right: 10px;
              top: 2px;
            }
          }

        }


        .detail-bottom {
          position: absolute;
          bottom: 15px;
          right: 32px;
          text-align: right;
          line-height: 31px;

          a {
            text-decoration: underline;
            color: #999999;
          }

          .translator {
            a {
              color: #0c73c2;
            }
          }
        }

      }
    }

    // 右侧相似推荐样式
    .detail-right {
      width: 270px;
      padding: 20px 25px;
      box-sizing: border-box;

      .title {
        color: #333333;
        font-weight: bolder;
        border-bottom: 1px solid #cccccc;
        line-height: 30px;
        margin-bottom: 18px;
      }

      .playlists {
        width: 100%;
        margin-bottom: 30px;

        .lists {
          .list-item {
            display: flex;
            flex-direction: row;
            margin-top: 7px;
            margin-bottom: 12px;

            .item-over {
              width: 50px;
              height: 50px;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .item-right {
              width: 170px;
              display: flex;
              flex-direction: column;
              padding-left: 7px;
              box-sizing: border-box;

              .item-name {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 15px;
                color: #000000;

                &:hover {
                  text-decoration: underline;
                }
              }

              .author {
                line-height: 25px;
                color: #666666;

                a {
                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
            }
          }
        }
      }

      .song-lists {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-sizing: border-box;
        height: 50px;
        //line-height: 50px;
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;

        .song {
          display: flex;
          flex-direction: column;
          line-height: 16px;
          cursor: pointer;

          .song-name {
            &:hover {
              text-decoration: underline;
            }
          }

          .singer a {
            &:hover {
              text-decoration: underline;
            }
          }

        }

        .button {
          width: 100px;
          height: 15px;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          margin-top: 8px;

          span {
            display: block;
            width: 14px;
            height: 15px;
            background: url("${icon2}");
            cursor: pointer;
          }

          .play {
            background-position: -66px -453px;
            margin-right: 15px;
          }

          .collect {
            background-position: -85px -453px;
          }
        }
      }

      .download {
        margin-top: 15px;
        position: relative;

        span {
          color: #9999b3;
        }

        .down-icon {
          width: 100%;
          height: 55px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-left: 7px;
          padding-right: 7px;
          margin-bottom: 25px;


          a {
            background: url("${cover2}");
          }

          .ios {
            height: 55px;
            width: 43px;
            background-position: 0 -388px;

            &:hover {
              background-position: 0 -468px;
            }
          }

          .win {
            width: 73px;
            height: 55px;
            background-position: -66px -388px;

            &:hover {
              background-position: -66px -468px;
            }
          }

          .and {
            width: 42px;
            height: 55px;
            background-position: -157px -388px;

            &:hover {
              background-position: -157px -468px;
            }
          }
        }
        
      }
      
      .edit-song {
        margin-top: 45px;
        color: black;
        &:hover {
          text-decoration: underline;
        }
      }
      

    }

  }

`;

export default SongDetail;

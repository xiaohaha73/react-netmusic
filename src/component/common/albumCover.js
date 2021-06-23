import React from 'react';
import styled from "styled-components";

// 导入格式化播放量的函数
import {formatPlayCount} from "../../utils/format-utils";

// 导入唱片封面精灵图
import cover from "../../assets/img/sprite_cover.png";
import icon from "../../assets/img/sprite_icon.png"

function AlbumCover(props) {
    const {className, height, hotsData} = props;

    return (
        <Cover className={className ? className : ''} height={height}>
            <ul>
                {
                    hotsData.map((item,key)=> (
                        <li key={key}>
                            <a href="#">
                                <div className="album">
                                    <div className="mask"></div>
                                    <img src={item.picUrl + "?param=140y140"} alt={item.copywriter}/>
                                    <div className="bottom-mask">
                                        <div className="hot">{formatPlayCount(item.playCount)}万</div>
                                        <i className="playIcon"></i>
                                    </div>
                                </div>
                                <span className="title">{item.name}</span>
                            </a>
                        </li>
                    ))

                }
            </ul>
        </Cover>
    );
}

export default AlbumCover;


const Cover = styled.div`
  margin-top: 20px;
  width: 100%;
  height: ${props => props.height};

  > ul {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 140px);
    grid-template-rows: repeat(auto-fill, 200px);
    justify-content: space-between;
    row-gap: 30px;

    li {
      // 140px
      
      a {
        display: block;
        width: 100%;
        height: 100%;

        .album {
          display: block;
          width: 140px;
          height: 140px;
          position: relative;
          .mask {
            position: absolute;
            height: 140px;
            width: 140px;
            background: url("${cover}") 0 0;
            top: 0;
            left: 0;
          }
          img {
            height: 100%;
            width: 100%;
          }
          .bottom-mask {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 27px;
            width: 100%;
            background: url("${cover}") 0 -537px;
            z-index: 4;
            
            .hot {
              position: relative;
              color: #ccc;
              line-height: 27px;
              margin-left: 30px;
              &::before {
                position: absolute;
                content: '';
                width: 14px;
                height: 15px;
                background: url("${icon}") 0 -23px;
                left: -17px;
                top: 7px;
              }
            }
            
            .playIcon {
              position: absolute;
              right: 7px;
              top: 4px;
              background: url("${icon}") -1px -86px;
              width: 20px;
              height: 20px;
              z-index: 4;
              
              &:hover {
                background-position: -1px -111px;
              }
            }
          }
        }
        
        .title {
          display: block;
          width: 100%;
          height: 54px;
          text-align: center;
          font-size: 14px;
          line-height: 18px;
          color: #000;
          overflow: hidden;
          text-overflow: ellipsis;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

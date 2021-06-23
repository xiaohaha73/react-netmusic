import React, {memo, useCallback, useRef} from 'react';
import styled from "styled-components";
// 导入轮播图组件
import {Carousel} from "antd";

// 导入背景图片
import cover from "../../../../../../assets/img/sprite_cover.png";
// 导入切换轮播图按钮的背景图片
import arrow from "../../../../../../assets/img/sprite_02.png";

function NewAlbum(props) {
    const {className, newAlbum} = props
    // 将获取到的新碟数据分成两个数组然后渲染到两个轮播图中
    const arr1 = newAlbum.slice(0, 5);
    const arr2 = newAlbum.slice(5, 10);

    // 使用useRef Hook获取轮播图dom
    const arrRef = useRef();

    // 左箭头点击函数
    const leftArrHandle = useCallback(() => {
        arrRef.current.prev();
    }, []);

    // 右箭头点击函数
    const rightArrHandle = useCallback(() => {
        arrRef.current.next()
    }, []);

    return (
        <Album className={className ? className : ''}>
            {/*轮播图组件*/}
            <Carousel ref={arrRef}>
                <div className="carousel-item">
                    <ul>
                        {
                            arr1.map((item, key) => (
                                <li key={key}>
                                    <div className="item-cover">
                                        <img src={item.picUrl + "?param=100y100"} alt={item.briefDesc}/>
                                    </div>
                                    <div className="describe">
                                        <a href="#" className="album-name">{item.name}</a>
                                        <p className="album-author">
                                            {
                                                item.artists.length === 1 ?
                                                    <a href="#">{item.artists[0].name}</a>
                                                    :
                                                    item.artists.map((item, key) =>
                                                        <a href="#" key={key}>{item.name}&nbsp;/&nbsp;</a>)

                                            }

                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="carousel-item">
                    <ul>
                        {
                            arr2.map((item, key) => (
                                <li key={key}>
                                    <div className="item-cover">
                                        <img src={item.picUrl + "?param=100y100"} alt={item.briefDesc}/>
                                    </div>
                                    <div className="describe">
                                        <a href="#" className="album-name">{item.name}</a>
                                        <p className="album-author">
                                            {
                                                item.artists.length === 1 ?
                                                    <a href="#">{item.artists[0].name}</a>
                                                    :
                                                    item.artists.map((item, key) =>
                                                        <a href="#" key={key}>{item.name}&nbsp;/&nbsp;</a>)

                                            }

                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Carousel>
            {/*切换轮播图按钮*/}
            <span className="arrow arr-left" onClick={leftArrHandle}></span>
            <span className="arrow arr-right" onClick={rightArrHandle}></span>
        </Album>
    );
}

export default memo(NewAlbum);

// 组件样式
const Album = styled.div`
  position: relative;
  // 点击切换轮播图按钮
  .arrow {
    position: absolute;
    width: 11px;
    height: 17px;
    background: url("${arrow}");
    top: 82px;
    cursor: pointer;
  }

  .arr-left {
    left: 9px;
    background-position: -263px -75px;

    &:hover {
      background-position: -283px -75px;
    }
  }

  .arr-right {
    right: 9px;
    background-position: -303px -75px;

    &:hover {
      background-position: -323px -75px;
    }
  }

  // 轮播图样式
  .ant-carousel {
    .carousel-item {
      height: 186px;
      width: 100%;
      box-sizing: border-box;
      padding: 30px 25px 30px 25px;

      > ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        li {
          width: 100px;
          height: 140px;

          .item-cover {
            position: relative;

            &::after {
              content: '';
              position: absolute;
              width: 117px;
              height: 100px;
              top: 0;
              left: 0;
              // 0 -570x
              background: url("${cover}") 0 -570px;
              z-index: 2;
            }

            &::before {
              content: '';
              position: absolute;
              width: 100px;
              height: 100px;
              top: 0;
              left: 0;
              z-index: 3;
              background: url("${cover}") -240px -70px;
            }

            img {
              width: 100px;
              height: 100px;
            }
          }

          .describe {
            line-height: 23px;

            a {
              display: block;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            a:hover {
              text-decoration: underline;
            }

            .album-name {
              width: 100px;
              color: #000;
              font-size: 13px;
            }

            .album-author {
              font-size: 13px;
              line-height: 14px;
              width: 120px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;

              a {
                display: inline-block;

                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }

    //  不显示轮播图的点
    .slick-dots {
      display: none !important;
    }

  }
`;


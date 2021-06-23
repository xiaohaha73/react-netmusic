// 歌单标题的公共组件
import styled from "styled-components";

// 导入背景图片
import bgUrl from "../../assets/img/sprite_02.png";

import React from 'react';

function ListTitle(props) {
    const {title, songType,className} = props;
    let songTypeList = songType ? songType : [];

    return (
        <Title className={className? className:''}>
            <div className="title-name">
                <span>{title}</span>
            </div>

            <div className="title-type">
                <ul>
                    {songTypeList.map((item, key) => {
                        return (
                            <li key={key}><a href="#">{item}</a></li>
                        );
                    })}

                </ul>
            </div>

            <div className="more">
                <a href="#">更多</a>
            </div>
        </Title>
    );
}

export default ListTitle;


// 标题组件的样式

const Title = styled.div`
  width: 100%;
  height: 35px;
  line-height: 35px;
  display: flex;
  flex-direction: row;
  position: relative;
  border-bottom: 2px solid #c10d0c;

  .title-name {
    font-size: 20px;
    line-height: 27px;
    font-weight: normal;

    span {
      margin-left: 37px;
      position: relative;

      &::before {
        position: absolute;
        left: -23px;
        top: 7px;
        content: '';
        height: 15px;
        width: 15px;
        background: url("${bgUrl}") -235px -164px;
      }
    }


  }

  .title-type {
    ul {
      display: flex;
      flex-direction: row;
      margin-left: 7px;

      li {
        padding: 0 13px 0 13px;
        position: relative;

        a:hover {
          text-decoration: underline;
        }

        &::before {
          content: '';
          position: absolute;
          height: 14px;
          width: 1px;
          background: #666;
          top: 10px;
          left: 0;
        }

        &:nth-child(1) {
          &::before {
            display: none;
          }
        }
      }
    }
  }

  .more {
    position: absolute;
    right: 28px;
    top: 1px;

    a:hover {
      text-decoration: underline;
    }

    &::after {
      content: '';
      height: 12px;
      width: 12px;
      position: absolute;
      top: 11px;
      right: -16px;
      background: url("${bgUrl}") 0 -240px;
    }
  }
`;


import styled from "styled-components";

const Banner = styled.div`
  width: 100%;
  height: 285px;
  background: url("${props => (props.bgImg)}") center center/6000px;
  //  轮播图区域
  .banner-main {
    position: relative;
    width: 982px;
    height: 100%;
    margin: 0 auto;

    a {
      display: block;
      height: 285px;
      width: 982px;

      img {
        width: 770px;
        //height: 100%;
      }
    }

    .ant-carousel .slick-dots li.slick-active button {
      background: #c20c0c !important;
    }

    .ant-carousel .slick-dots li button:hover, .ant-carousel .slick-dots li button:focus {
      opacity: 1;
      background: #c20c0c !important;
    }
    .ant-carousel .slick-dots {
      z-index: 5 !important;
    }

    // 轮播图的圆点样式
    .slick-dots {
      margin-right: 348px;
      li {
        height: 6px;
        width: 6px;
        margin-right: 12px;
        button {
          height: 6px;
          width: 6px;
          border-radius: 50%;
          
        }
      }
    }

    // 轮播图按钮样式
    .carousel-button {
      .arr {
        display: block;
        height: 63px;
        width: 37px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        

        &:hover {
          background: rgba(0, 0, 0, .3);
        }

        img {
          width: 100%;
          height: 100%;
        }

        &:nth-child(1) {
          left: -70px;
        }

        &:nth-child(2) {
          right: -70px;
        }

      }


    }


    //  右侧下载链接模块
    .download-area {
      position: absolute;
      height: 285px;
      width: 254px;
      top: 0;
      right: 0;

      .download {
        width: 100%;
        height: 100%;
        background: url("/images/download.png") top center no-repeat;
        a {
          display: block;
          height: 56px;
          width: 215px;
          position: absolute;
          bottom: 44px;
          left: 50%;
          transform: translateX(-50%);
          
          &:hover {
            background: url("/images/download.png") 0 -289px;
            background-size: 254px 353px;
          }
        }
        small {
          position: absolute;
          bottom: 15px;
          color: #8d8d8d;
          left: 18px;
          
        }
      }

    }

  }
`;

export default Banner;

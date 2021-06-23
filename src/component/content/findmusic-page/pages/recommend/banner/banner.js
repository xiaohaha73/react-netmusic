import React, {memo, useRef, useState, useCallback} from 'react';
import {Carousel} from "antd"

// 导入样式组件
import Banner from "./banner-style";

function BannerComponent(props) {

    // 使用useState设置轮播图选中的索引值
    const [index, setIndex] = useState(0);

    // 使用useRef hook
    const bannerRef = useRef(); // 获取dom实现点击切换下一张轮播图

    const {bannerImg} = props;
    // 将当前选中的轮播图加工成毛玻璃效果
    const bgImg = bannerImg[index] && (bannerImg[index].imageUrl + "?imageView&blur=40x20")

    // 监听轮播图切换索引值的函数
    const bannerChangeHandle = useCallback((from, to) => {
        setIndex(to)
    }, [])

    return (
        // 将背景图片的参数传递给轮播图组件实现背景图片切换效果
        <Banner bgImg={bgImg}>
            <div className="banner-main">
                <Carousel
                    // autoplay
                    ref={bannerRef}
                    beforeChange={bannerChangeHandle}
                    effect="fade"
                    autoplaySpeed={7000}
                >
                    {bannerImg.map((item, key) => (
                        <a href={item.url} key={key}>
                            <img src={item.imageUrl} alt={item.typeTitle}/>
                        </a>
                    ))}
                </Carousel>
                {/* 轮播图按钮 */
                }
                <div className="carousel-button">
                    <span className="arr" onClick={e => (bannerRef.current.prev())}><img src="/images/arrl.png"/></span>
                    <span className="arr" onClick={e => (bannerRef.current.next())}><img src="/images/arrr.png"/></span>
                </div>

                {/* 右侧下载区域*/}
                <div className="download-area">
                    <div className="download">
                        <a href="https://music.163.com/#/download"></a>
                        <small>PC 安卓 iPhone WP iPad Mac 六大客户端</small>
                    </div>
                </div>
            </div>

        </Banner>
    );
}

export default memo(BannerComponent);

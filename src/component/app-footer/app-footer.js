import React, {memo} from 'react';

// 导入样式
import "../../assets/style/app-footer.scss"

// 导入底部音乐播放组件
import AppPlayer from "../app-player/app-player";

function AppFooter(props) {

    return (
        <div id="app-footer">
            <div className="footer-content">
                <div className="notesLink">
                    <div className="notesTop">
                        <ul>
                            <li><a href="#">服务条款</a></li>
                            <li><a href="#">隐私政策</a></li>
                            <li><a href="#">儿童隐私政策</a></li>
                            <li><a href="#">版权投诉指引</a></li>
                            <li><a href="#">意见反馈</a></li>
                        </ul>
                    </div>
                    <div className="notesBottom">
                        <div className="Line">
                            <span>网易公司版权所有©1997-2021</span>
                            <span>杭州乐读科技有限公司运营：</span>
                            <a href="#">浙网文[2018]3506-263号</a>
                        </div>
                        <div className="Line">
                            <span>违法和不良信息举报电话：0571-89853516</span>
                            <span>举报邮箱：</span>
                            <a href="#">ncm5990@163.com</a>
                        </div>
                        <div className="Line">
                            <a href="#">粤B2-20090191-18 工业和信息化部备案管理系统网站</a>
                            <a href="#" className="lastText">浙公网安备 33010902002564号</a>
                        </div>
                    </div>
                </div>
                <div className="iconsLink">
                    <ul>
                        <li><a href="#"><small>Amped Studio</small></a></li>
                        <li><a href="#"><small>用户认证</small></a></li>
                        <li><a href="#"><small>独立音乐人</small></a></li>
                        <li><a href="#"><small>赞赏</small></a></li>
                        <li><a href="#"><small>视频奖励</small></a></li>
                    </ul>
                </div>
            </div>

            <AppPlayer/>

        </div>
    );
}

export default memo(AppFooter);

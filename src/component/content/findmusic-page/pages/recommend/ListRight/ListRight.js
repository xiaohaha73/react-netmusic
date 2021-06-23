import React, {memo} from 'react';

function ListRight(props) {
    let {songer, anchor} = props;
    songer = songer ? songer : []; //传递过来的歌手数据
    anchor = anchor ? anchor : []; // 主播信息数组
    return (
        <div id="re-ListRight">
            <div className="login">
                <span>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</span>
                <div className="Login-button">用户登录</div>
            </div>

            {/*入驻歌手*/}
            <div className="singers">
                <div className="title">
                    <h4>入驻歌手</h4>
                    <a href="#">查看全部> </a>
                </div>
                <div className="content">
                    <ul>
                        {
                            songer.map((item, key) => (
                                <li key={key}>
                                    <a href="#">
                                        <img src={item.picUrl + '?param=62y62'} alt=""/>
                                        <div className="singer-name">
                                            <h5 className="name">{item.name}</h5>
                                            <p className="describe">国内知名歌手</p>
                                        </div>
                                    </a>
                                </li>
                            ))
                        }

                    </ul>
                    <div className="apply-btn">申请成为网易音乐人</div>
                </div>
            </div>

            {/*热门主播*/}
            <div className="anchor">
                <div className="title">
                    <h4>热门主播</h4>
                </div>
                <div className="content">
                    <ul>
                        {
                            anchor.map((item, key) => (
                                <li key={key}>
                                    <a href="#">
                                        <img src={item.avatarUrl + '?param=40y40'} alt=""/>
                                        <div className="describe">
                                            <h4 className="name">{item.nickName}</h4>
                                            <span className="profession">键盘敲烂，月薪上万</span>
                                        </div>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default memo(ListRight);

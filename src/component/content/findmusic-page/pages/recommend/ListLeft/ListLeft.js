import React, {memo} from 'react';

// 导入标题头部组件
import ListTitle from "../../../../../common/ListTitle";
// 导入唱片列表组件
import AlbumCover from "../../../../../common/albumCover";
// 导入新碟上架模块
import NewAlbum from "./newAlbum";
// 导入榜单模块
import TopRank from "./topRank";

function ListLeft(props) {
    // 从父组件传递过来的歌单数据
    const {hotsData,newAlbum,ranking} = props; // 然后将数据传递给子组件


    return (
        <div id="re-ListLeft">
            <ListTitle
                title="热门推荐"
                songType={["华语", "流行", "摇滚", "民谣", "电子"]}
            />
            {/*唱片列表*/}
            <AlbumCover height="427px" hotsData={hotsData}/>
            <ListTitle
                className="newSongsList"
                title="新碟上架"
            />
            {/*新碟上架模块*/}
            <NewAlbum
                className="new-album"
                newAlbum={newAlbum}
            />
            <ListTitle title="榜单"/>
            {/*榜单模块*/}
            <TopRank
                className="top-rank"
                ranking={ranking}
            />
        </div>
    );
}

export default memo(ListLeft);

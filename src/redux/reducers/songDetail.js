import {SONGDETAIL, SONGLIST, SONGINDEX, LYRICLIST, CURRENTLYRIC} from "../constant";
import {Map} from "immutable"

// 原始数据,用immutable提高性能
const orginalData = Map({
    song_detail: [], // 歌曲详细信息
    play_list: [
        [{
            "name": "絶体絶命",
            "id": 1849359143,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 19353,
                    "name": "EGOIST",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [
                "手游《碧蓝航线》国服4周年纪念主题曲"
            ],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 3,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 128235110,
                "name": "絶体絶命",
                "picUrl": "https://p1.music.126.net/-UgtDNxsHUdjxrLlud4lRA==/109951166048206553.jpg",
                "tns": [],
                "pic_str": "109951166048206553",
                "pic": 109951166048206560
            },
            "dt": 262765,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 10510672,
                "vd": -66706
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 6306421,
                "vd": -64431
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 4204295,
                "vd": -63201
            },
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 270336,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "resourceState": true,
            "single": 0,
            "noCopyrightRcmd": null,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 7001,
            "mv": 0,
            "publishTime": 1623772800000
        }],
        [{
            "name": "好久不见",
            "id": 1847422867,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 12079066,
                    "name": "Lil Jet",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 6,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 127857194,
                "name": "好久不见",
                "picUrl": "https://p2.music.126.net/8nxYZ64Z3v-6PaQWibygVQ==/109951166069091920.jpg",
                "tns": [],
                "pic_str": "109951166069091920",
                "pic": 109951166069091920
            },
            "dt": 230844,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 9233807,
                "vd": -56232
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 5540302,
                "vd": -53752
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3693549,
                "vd": -52180
            },
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 8192,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "resourceState": true,
            "single": 0,
            "noCopyrightRcmd": null,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 7001,
            "mv": 0,
            "publishTime": 0
        }],
        [{
            "name": "入阵曲",
            "id": 1844681125,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 14588567,
                    "name": "张晓涵",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 4,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 127352558,
                "name": "入阵曲",
                "picUrl": "https://p1.music.126.net/sRivRbVgcXO0K4zR1tRuhg==/109951165975474328.jpg",
                "tns": [],
                "pic_str": "109951165975474328",
                "pic": 109951165975474340
            },
            "dt": 171300,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 6854574,
                "vd": -64140
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 4112762,
                "vd": -61609
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 2741856,
                "vd": -60139
            },
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 8192,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "resourceState": true,
            "single": 0,
            "noCopyrightRcmd": null,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 1418166,
            "mv": 14286094,
            "publishTime": 1621267200000
        }]
    ],  // 存储的播放列表
    play_song_index: 0, // 存储播放歌曲在播放列表中的索引值
    lyric_list: [], // 存放的歌词列表
    current_lyric: {
        index:0,
        lyric:''
    }, // 当前播放到的歌曲的歌词
});
export default function songDetail(state = orginalData, action) {
    const {type, data} = action;
    switch (type) {
        default:
            return state;
        case SONGDETAIL: // 歌曲详细信息
            return state.set("song_detail", data);

        case SONGLIST: // 歌曲列表
            return state.set("play_list", data);

        case SONGINDEX: // 当前歌曲的列表索引值
            const index = data === -1 ? 0 : data;
            return state.set("play_song_index", index);

        case LYRICLIST: // 存放当前歌曲的歌词
            return state.set("lyric_list",data);

        case CURRENTLYRIC: // 当前播放到的歌曲的歌词
            return state.set("current_lyric",data);
    }
}

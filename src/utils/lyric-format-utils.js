/**
 *
 * @param lyric 传递过来的歌词字符串
 */
export const lyricFormat = (lyric) =>{

    // 定义一个分割时间和后面的歌词的正则表达式
    const lyricReg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
    // 格式化之后的歌词数组
    let newList = [];

    // 切割分成一个歌词数组
    const lyricList = lyric.split("\n");
    lyricList.forEach((item)=> {
        if (item) {
            const lyricItem = {};
            const ret = lyricReg.exec(item);
            if (ret) {
                let time1 = ret[1] * 60 *1000; // 转换成毫秒
                let time2 = ret[2] * 1000;
                let time3 = ret[3].length === 2? ret[3] * 10 : ret[3] * 1;
                lyricItem.time =  time1 + time2 + time3;
                lyricItem.lyric = item.replace(lyricReg,'').trim();
                newList.push(lyricItem)
            }
        }
    })

    return newList;
}

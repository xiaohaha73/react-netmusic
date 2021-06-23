// 格式化歌曲热度播放量的函数
export const formatPlayCount = (count) => {
    count = Number(count);
    if (count > 10000) {
        return parseInt(count / 10000)
    }
    return count;
}


// 格式化歌曲播放总时长的函数
export const formatTime = (time) => {
    time = new Date(Number(time));
    // 获取分
    let minutes = String(time.getMinutes());
    let seconds = String(time.getSeconds());
    minutes = minutes.length === 1 ? '0' + minutes : minutes;
    seconds = seconds.length === 1 ? '0' + seconds : seconds;
    return `${minutes}:${seconds}`;
}

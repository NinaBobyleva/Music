export const timeFormat = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    let finalTime = `${minutes}:${seconds.toFixed(0)}`;
    if (seconds < 10) {
        return finalTime = `${minutes}:${`0${seconds.toFixed(0)}`}`;
    }
    return finalTime;
}
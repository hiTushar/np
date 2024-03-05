/**
 * 
 * @param {number} timestamp - millisecond 
 * 
 */

export function splitTimestamp(timestamp) {
    let millisecondsLeft = timestamp;

    let hours = String(parseInt(millisecondsLeft / (1000 * 60 * 60)));
    millisecondsLeft = millisecondsLeft % (1000 * 60 * 60);

    let minutes = String(parseInt(millisecondsLeft / (1000 * 60)));
    millisecondsLeft = millisecondsLeft % (1000 * 60);

    let seconds = String(parseInt(millisecondsLeft / 1000));

    hours = hours.length === 1 ? `0${hours}` : hours;
    minutes = minutes.length === 1 ? `0${minutes}` : minutes;
    seconds = seconds.length === 1 ? `0${seconds}` : seconds;
    let unit = +hours ? 'Hr' : (+minutes ? 'mins' : 's');

    return [hours, minutes, seconds, unit];
}

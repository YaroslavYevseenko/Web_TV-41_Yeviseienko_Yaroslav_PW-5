export function formatNumber(value, digits = 2) {
    return Number(value).toFixed(digits);
}

export function formatTime(date) {
    return new Date(date).toLocaleTimeString("uk-UA");
}
let currentData = null;
let history = [];

export function setTecData(data) {
    currentData = data;
    history.push(data);

    if (history.length > 20) {
        history.shift();
    }
}

export function getTecData() {
    return currentData;
}

export function getTecHistory() {
    return history;
}
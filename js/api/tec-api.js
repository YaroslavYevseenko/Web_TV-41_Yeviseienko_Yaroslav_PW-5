let currentData = {
    electricPower: 2.65,
    thermalPower: 5.25,
    gasConsumption: 820,
    coolantTemperature: 88,
    electricEfficiency: 36,
    thermalEfficiency: 48,
    timestamp: new Date().toISOString()
};

export function startTecDataStream(onData) {
    onData(currentData);

    setInterval(() => {
        currentData = generateRealisticData(currentData);
        onData(currentData);
    }, 3500);
}

function generateRealisticData(prev) {
    const next = { ...prev };

    if (Math.random() < 0.45) {
        next.electricPower = drift(prev.electricPower, 2.3, 3.1, 0.04);
    }

    if (Math.random() < 0.4) {
        next.thermalPower = drift(prev.thermalPower, 4.8, 5.9, 0.06);
    }

    if (Math.random() < 0.35) {
        next.gasConsumption = drift(prev.gasConsumption, 760, 900, 8);
    }

    if (Math.random() < 0.3) {
        next.coolantTemperature = drift(prev.coolantTemperature, 84, 94, 0.5);
    }

    next.electricEfficiency = calculateEfficiency(next.electricPower, next.gasConsumption, 32, 39);
    next.thermalEfficiency = calculateEfficiency(next.thermalPower, next.gasConsumption, 43, 52);

    next.timestamp = new Date().toISOString();

    return next;
}

function drift(value, min, max, step) {
    const direction = Math.random() > 0.5 ? 1 : -1;
    const change = Math.random() * step * direction;
    const result = value + change;

    return Number(Math.min(max, Math.max(min, result)).toFixed(2));
}

function calculateEfficiency(power, gas, min, max) {
    const value = min + (power / gas) * 1000;
    return Number(Math.min(max, Math.max(min, value)).toFixed(2));
}
export function updateTable(data) {
    const table = document.getElementById("params-table");

    table.innerHTML = `
        <tr><td>Електрична потужність</td><td>${data.electricPower} МВт</td></tr>
        <tr><td>Теплова потужність</td><td>${data.thermalPower} Гкал/год</td></tr>
        <tr><td>Витрата газу</td><td>${data.gasConsumption} м³/год</td></tr>
        <tr><td>Температура теплоносія</td><td>${data.coolantTemperature} °C</td></tr>
        <tr><td>Електричний ККД</td><td>${data.electricEfficiency}%</td></tr>
        <tr><td>Тепловий ККД</td><td>${data.thermalEfficiency}%</td></tr>
        <tr><td>Час оновлення</td><td>${new Date(data.timestamp).toLocaleTimeString("uk-UA")}</td></tr>
    `;
}
let isGoogleLoaded = false;

export function initSankey(callback) {
    google.charts.load("current", { packages: ["sankey"] });

    google.charts.setOnLoadCallback(() => {
        isGoogleLoaded = true;
        callback();
    });
}

export function drawSankey(data) {
    if (!isGoogleLoaded) return;

    const inputEnergy = data.gasConsumption * 0.01;
    const usefulEnergy = data.electricPower + data.thermalPower;
    const losses = Math.max(inputEnergy - usefulEnergy, 0.5);

    const chartData = google.visualization.arrayToDataTable([
        ["From", "To", "Value"],
        ["Природний газ", "Когенераційна установка", inputEnergy],
        ["Когенераційна установка", "Електроенергія", data.electricPower],
        ["Когенераційна установка", "Теплова енергія", data.thermalPower],
        ["Когенераційна установка", "Втрати", losses]
    ]);

    const chart = new google.visualization.Sankey(
        document.getElementById("sankey-chart")
    );

    chart.draw(chartData);
}
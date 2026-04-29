let electricChart;
let thermalChart;

export function initCharts() {
    electricChart = createLineChart(
        "electric-chart",
        "Електрична потужність, МВт"
    );

    thermalChart = createLineChart(
        "thermal-chart",
        "Теплова потужність, Гкал/год"
    );
}

function createLineChart(canvasId, label) {
    return new Chart(document.getElementById(canvasId), {
        type: "line",
        data: {
            labels: [],
            datasets: [{
                label,
                data: [],
                tension: 0.45,
                pointRadius: 3,
                pointHoverRadius: 5
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 900,
                easing: "easeOutQuart"
            },
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}

export function updateCharts(data) {
    const time = new Date(data.timestamp).toLocaleTimeString("uk-UA");

    updateOneChart(electricChart, time, data.electricPower);
    updateOneChart(thermalChart, time, data.thermalPower);
}

function updateOneChart(chart, label, value) {
    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(value);

    if (chart.data.labels.length > 18) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }

    chart.update();
}
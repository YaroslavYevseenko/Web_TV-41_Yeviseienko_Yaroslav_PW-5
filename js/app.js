import { startTecDataStream } from "./api/tec-api.js";
import { setTecData, getTecData } from "./state/tec-state.js";
import { updateUI } from "./ui/ui.js";
import { initCharts, updateCharts } from "./charts/charts.js";
import { initSankey, drawSankey } from "./charts/sankey.js";

function handleNewData(data) {
    setTecData(data);
    updateUI(data);
    updateCharts(data);
    drawSankey(data);
}

initCharts();

initSankey(() => {
    const data = getTecData();
    if (data) drawSankey(data);
});

startTecDataStream(handleNewData);
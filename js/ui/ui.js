import { updateKpi } from "./kpi.js";
import { updateTable } from "./table.js";

export function updateUI(data) {
    updateKpi(data);
    updateTable(data);
}
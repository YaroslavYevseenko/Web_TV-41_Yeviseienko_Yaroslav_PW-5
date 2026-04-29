export function updateKpi(data) {
    setValue("electric-power", `${data.electricPower} МВт`);
    setValue("thermal-power", `${data.thermalPower} Гкал/год`);
    setValue("gas-consumption", `${data.gasConsumption} м³/год`);
    setValue("coolant-temperature", `${data.coolantTemperature} °C`);
    setValue("electric-efficiency", `${data.electricEfficiency}%`);
    setValue("thermal-efficiency", `${data.thermalEfficiency}%`);
}

function setValue(id, value) {
    const element = document.getElementById(id);

    if (element.textContent === value) return;

    element.textContent = value;
    element.classList.add("updated");

    setTimeout(() => {
        element.classList.remove("updated");
    }, 350);
}
const meterElement = document.querySelector(".meter");
const meterElement_1 = document.querySelector(".meter_1");
const meterElement_2 = document.querySelector(".meter_2");
const meterElement_3 = document.querySelector(".meter_3");

function setMeterValue(meter, value) {
    if (value < 0 || value > 1) {
        return;
    }

    meter.querySelector(".meter__fill").style.transform = `rotate(${
        value / 2
    }turn)`;
    meter.querySelector(".meter__cover").textContent = `${Math.round(
        value * 100
    )}%`;
}

/** procent berekenen **/
setMeterValue(meterElement, 0.3);
setMeterValue(meterElement_1, 0.75);
setMeterValue(meterElement_2, 0.52);
setMeterValue(meterElement_3, 0.95);
/** 0.3 = 30% **/
/** 0.75 = 75% **/

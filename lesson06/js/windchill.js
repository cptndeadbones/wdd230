function windChill() {
    let tempF = parseInt(document.getElementById('high'));
    let speed = parseInt(document.getElementById('wind-speed'));
    let chill = calculateChill(tempF, speed);
    if ((tempF <= 50) && (speed >= 3.0)){ document.getElementById('wind-chill').innerHTML = chill + "\u00B0F"; }
    else { document.getElementById('wind-chill').innerHTML = "N/A";
}
}
function calculateChill(tempF, speed) {
    f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
    return f.toFixed(1); }

    windChill();

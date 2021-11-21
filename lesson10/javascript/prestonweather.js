const weatherapi = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=56f32390d192e8a8ff885303329930ca";
fetch(weatherapi)
    .then((response) => response.json())
    .then((jsObject) => {
        windChill(jsObject)
        document.getElementById('current').innerHTML = jsObject.weather[0].description;
        document.getElementById('high').innerHTML = Math.floor(jsObject.main.temp);
        document.getElementById('humidity').innerHTML = jsObject.main.humidity;
        document.getElementById('wind-speed').innerHTML = jsObject.wind.speed;
    });

    windy = document.getElementById("high");
    function windChill(jsObject) {
        let tempF = parseInt(document.getElementById('high').innerHTML);
        let speed = parseInt(document.getElementById('wind-speed').innerHTML);
        let chill = calculateChill(tempF, speed);
        if ((tempF <= 50) && (speed >= 4.8)){ document.getElementById('wind-chill').innerHTML = chill + "\u00B0F"; }
        else { document.getElementById('wind-chill').innerHTML = "N/A"; }
    }
    function calculateChill(tempF, speed) {
        f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
        return f.toFixed(1); }
    windChill();
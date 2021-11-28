const weatherapi = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=56f32390d192e8a8ff885303329930ca";
fetch(weatherapi)
    .then((response) => response.json())
    .then((jsObject) => {
        windChill(jsObject)
        document.getElementById('current').innerHTML = jsObject.weather[0].description;
        document.getElementById('high').innerHTML = Math.floor(jsObject.main.temp);
        document.getElementById('humidity').innerHTML = jsObject.main.humidity;
        document.getElementById('wind-speed').innerHTML = jsObject.wind.speed;
        windChill(jsObject)

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
        windChill()
});

    const forecastapi = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=56f32390d192e8a8ff885303329930ca";
    fetch(forecastapi)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
            return response.json();
          }})
        .then((jsObject) => {
            const sixpm = jsObject.list.filter(x => x.dt_txt.includes('18:00:00')); 
            let day = 1; 
            sixpm.forEach(evening => {
                let date = new Date(evening.dt_txt);
                const imagesrc = "https://openweathermap.org/img/w/" + evening.weather[0].icon + '.png';
                const desc = evening.weather[0].description;
                const weekdays = [
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thur",
                    "Fri",
                    "Sat"];
                    document.getElementById(`day${day}`).innerHTML = weekdays[date.getDay()];
                    document.getElementById(`img${day}`).setAttribute('src', imagesrc);
                    document.getElementById(`img${day}`).setAttribute('alt', desc);
                    document.getElementById(`temp${day}`).innerHTML = Math.floor(evening.main.temp)+`&deg;F`;
                    day++;
            
        })
    })
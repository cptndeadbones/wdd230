const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=Charlotte&units=imperial&appid=56f32390d192e8a8ff885303329930ca";

fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp.toFixed(1);
    
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('.rainy').textContent = desc;
    document.querySelector('#wind-speed').textContent = jsObject.wind.speed;
});

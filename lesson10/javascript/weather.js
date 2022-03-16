const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=Charlotte&units=imperial&appid=56f32390d192e8a8ff885303329930ca";

fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });

  
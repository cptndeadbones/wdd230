const homepageurl = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(homepageurl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    towns.forEach((city) => {
        //section and html element definition and creation.
        if (city.name == "Preston"){
        let towns = document.createElement('section');
        let h2 = document.createElement('h2');
        let event1 = document.createElement('p');
        let event2 = document.createElement('p');
        let event3 = document.createElement('p');
         
        

        //JSON import and assembly for html section.
        h2.innerHTML = `${city.name}`;
        towns.appendChild(h2);

        event1.innerHTML = `${city.events[0]}`;
        towns.appendChild(event1);

        event2.innerHTML = `${city.events[1]}`;
        towns.appendChild(event2);

        event3.innerHTML = `${city.events[2]}`;
        towns.appendChild(event3);
        
        document.getElementById('prestonevent').appendChild(towns).setAttribute('class', 'eventsection');
        }
      });
});
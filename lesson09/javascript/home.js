const homepageurl = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(homepageurl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    towns.forEach((city) => {
        //section and html element definition and creation.
        if (city.name == "Soda Springs" || city.name == "Fish Haven" || city.name == "Preston"){
        let section = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let anr = document.createElement('p'); //anr = annual average rain fall. 
        let image = document.createElement('img');

        //JSON import and assembly for html section.
        h2.innerHTML = `${city.name}`;
        section.appendChild(h2);
        h3.innerHTML = `${city.motto}`;
        section.appendChild(h3);
        year.innerHTML = `Year founded: ${city.yearFounded}`;
        section.appendChild(year);
        population.innerHTML = `Current Pop. ${city.currentPopulation}`;
        section.appendChild(population);
        anr.innerHTML = `Average Rainfall / Yr: ${city.averageRainfall}in.`;
        section.appendChild(anr);
        if (city.name == "Soda Springs") {
            image.setAttribute('src', '/wdd230/lesson09/images/instagramicon.png'); // How do we source our own image? 
            image.setAttribute('alt', `${city.name}`);
            section.appendChild(image);
        } else if( city.name == "Fish Haven"){
            image.setAttribute('src', '/wdd230/lesson09/images/facebookicon.png'); // How do we source our own image? 
            image.setAttribute('alt', `${city.name}`);
            section.appendChild(image);
        } else if(city.name == "Preston"){
            image.setAttribute('src', '/wdd230/lesson09/images/facebookicon.png'); // How do we source our own image? 
            image.setAttribute('alt', `${city.name}`);
            section.appendChild(image);
        }


        document.querySelector('div.featured-towns').appendChild(section);
        }
      });
});
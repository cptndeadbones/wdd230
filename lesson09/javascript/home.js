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
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let anr = document.createElement('p'); //anr = annual average rain fall. 
        let image = document.createElement('img');

        //JSON import and assembly for html section.
        h2.innerHTML = `${city.name}`;
        div.appendChild(h2);
        h3.innerHTML = `"${city.motto}"`;
        div.appendChild(h3);
        year.innerHTML = `Year Founded: ${city.yearFounded}`;
        div.appendChild(year);
        population.innerHTML = `Current Pop. ${city.currentPopulation}`;
        div.appendChild(population);
        anr.innerHTML = `Average Rainfall / Yr: ${city.averageRainfall}in.`;
        div.appendChild(anr);
        section.appendChild(div);
        if (city.name == "Soda Springs") {
            image.setAttribute('src', '/wdd230/lesson09/images/sodaspringshome.jpg');
            image.setAttribute('alt', `${city.name}`);
            image.setAttribute('id', `sodasprings`);
            section.appendChild(image);
        } else if( city.name == "Fish Haven"){
            image.setAttribute('src', '/wdd230/lesson09/images/fishhavenhome.jpg'); 
            image.setAttribute('alt', `${city.name}`);
            section.appendChild(image);
            image.setAttribute('id', `fishhaven`);
        } else if(city.name == "Preston"){
            image.setAttribute('src', '/wdd230/lesson09/images/perriganhome.jpg'); 
            image.setAttribute('alt', `${city.name}`);
            section.appendChild(image);
            image.setAttribute('id', `preston`);
        }

        document.querySelector('div.featured-towns').appendChild(section);
        }
      });
});
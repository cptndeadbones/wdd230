const homepageurl = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['town'];
    towns.forEach((city) => {
        let section = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let anr = document.createElement('p');//anr = annual rain fall. 
        let image = document.createElement('img');

        h2.innerHTML = `${town.name}`;
        section.appendChild(h2);
        h3.innerHTML = `${town.motto}`;
        section.appendChild(h3);

        birthday.innerHTML = `Date of Birth: ${prophet.birthdate}<br><br> Place of Birth: ${prophet.birthplace}`;
        section.appendChild(birthday);
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', `${prophet.name} ${prophet.lastname}-${prophet.order}`);
        section.appendChild(image);

        document.querySelector('div.cards').appendChild(section);
      });
});
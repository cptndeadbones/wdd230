const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birthday = document.createElement('p');
        let image = document.createElement('img');

        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        card.appendChild(h2);
        birthday.innerHTML = `Date of Birth: ${prophet.birthdate}<br><br> Place of Birth: ${prophet.birthplace}`;
        card.appendChild(birthday);
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', `${prophet.name} ${prophet.lastname}-${prophet.order}`);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
      });
});
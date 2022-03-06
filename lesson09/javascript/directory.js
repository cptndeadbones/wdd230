const requestURL = 'https://cptndeadbones.github.io/wdd230/lesson09/json/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const localBusiness = jsonObject['localBusiness'];
    localBusiness.forEach((business) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let address = document.createElement('p');
        let image = document.createElement('img');
        let phone = document.createElement('p');

        image.setAttribute('src', business.image);
        image.setAttribute('alt', `${business.iconAlt}`);
        card.appendChild(image);
        h2.innerHTML = `Name: ${business.name}`;
        card.appendChild(h2);
        phone.innerHTML = `Phone: ${business.phone}`;
        card.appendChild(phone);
        address.innerHTML = `Address: ${business.address}`;
        card.appendChild(address);


        document.querySelector('div.bizcards').appendChild(card);
      });
});
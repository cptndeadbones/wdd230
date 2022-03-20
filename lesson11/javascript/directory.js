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
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let address = document.createElement('p');
        let image = document.createElement('img');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let list = document.createElement('div');
        let name = document.createElement('h2');
        let cardAddress = document.createElement('p');
        let listPhone = document.createElement('p');
        let listWebsite = document.createElement('p');
        

        image.setAttribute('src', business.image);
        image.setAttribute('alt', `${business.iconAlt}`);
        div.appendChild(image);
        card.appendChild(div);
        h2.innerHTML = `${business.name}`;
        card.appendChild(h2);
        phone.innerHTML = `Phone: ${business.phone}`;
        phone.setAttribute('id', `${business.id}`)
        card.appendChild(phone);
        address.innerHTML = `Address: ${business.address}`;
        card.appendChild(address);
        website.innerHTML = `Website: ${business.website}`;
        card.appendChild(website);

        document.querySelector('div.bizcards').appendChild(card);
      


        name.innerHTML = `${business.name}`;
        list.appendChild(name);
        cardAddress.innerHTML = `${business.address}`;
        list.appendChild(cardAddress);
        listPhone.innerHTML = `${business.phone}`;
        list.appendChild(listPhone);
        listWebsite.innerHTML = `${business.website}`;
        list.appendChild(listWebsite);

        
        document.querySelector('div.bizlist').appendChild(list);


      
      });
});


/***********************************************************************
 * Toggle functions for Business Cards / List selection.
 **********************************************************************/
function togglelist() {
    document.getElementById('bcards').style.display = "none";
    document.getElementById('blist').style.display = "grid";
    document.getElementById('businessCardView').classList.remove("selected");
    document.getElementById('businessListView').classList.add("selected");
}

function togglecards() {
  document.getElementById('blist').style.display = "none";
  document.getElementById('bcards').style.display = "grid";
  document.getElementById('businessListView').classList.remove("selected");
  document.getElementById('businessCardView').classList.add("selected");
}


togglelist();
togglecards();

// JSON File for cities info
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

// fecth() method
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2'); //Town name
        let h4 = document.createElement('h4'); //Motto
        let p1 = document.createElement('p'); //Year founded
        let p2 = document.createElement('p'); //Population
        let p3 = document.createElement('p'); //Avg rainfall
        let img = document.createElement('img'); //Town photo

        h2.textContent = towns[i].name; //Town name
        h4.textContent = towns[i].motto; //Motto
        p1.textContent = 'Year Founded: ' + towns[i].yearFounded; //Year founded
        p2.textContent = 'Population: ' + towns[i].currentPopulation; //Population
        p3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall; //Avg rainfall
        img.setAttribute('src', "images/" + towns[i].photo);
        img.setAttribute('alt', "Picture of " + towns[i].name); //Town photo

        if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
        card.appendChild(h2); //Town name
        card.appendChild(h4); //Motto
        card.appendChild(p1); //Year founded
        card.appendChild(p2); //Population
        card.appendChild(p3); //Avg rainfall
        card.appendChild(img); //Town photo

        document.querySelector('div.cards').appendChild(card);}
     }
});
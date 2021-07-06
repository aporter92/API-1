const baseURL = 'https://ghibliapi.herokuapp.com'

let studioGhibliPeople = document.querySelector('ul');
let showChar = document.querySelector('.button');
let studioGhibliFilms = document.querySelector('.films');
showChar.addEventListener('click', displayPic);
showChar.addEventListener('click', displayFilm);


function displayPic(event) {
    fetch ('https://ghibliapi.herokuapp.com/people')
    .then (function(response) {
        return response.json ();
    })
    .then (function(json) {
        let people = json;
        // console.log(people);
        // console.log(people[0].name)
        for (p of people) {
            let listItem = document.createElement('li');
            listItem.innerHTML = '<p>' + p.name + '</p>';
            studioGhibliPeople.appendChild(listItem);
        };   
    });
}

function displayFilm(event) {
    fetch ('https://ghibliapi.herokuapp.com/films')
    .then (function(response) {
        return response.json ();
    })
    .then (function(json) {
        let films = json;
        console.log(films);
        console.log(films[0].title)
        for (f of films) {
            let filmList = document.createElement('li');
            filmList.innerHTML = '<p>' + f.title + '</p>';
            studioGhibliFilms.appendChild(filmList);
        };   
    });
}




const baseURL = 'https://ghibliapi.herokuapp.com'

let studioGhibliPeople = document.querySelector('.characters');
// let showChar = document.querySelector('.button');
let studioGhibliFilms = document.querySelector('.films');
// showChar.addEventListener('click', displayPic);
// showChar.addEventListener('click', displayFilm);


// function displayPic() {
//     fetch ('https://ghibliapi.herokuapp.com/people')
//     .then (function(response) {
//         return response.json ();
//     })
//     .then (function(json) {
//         let people = json;
//         // console.log(people);
//         // console.log(people[0].name)
//         for (p of people) {
//             let listItem = document.createElement('li');
//             listItem.innerHTML = '<p>' + p.name + '</p>';
//             studioGhibliPeople.appendChild(listItem);
//         };   
//     });
// }
fetch ('https://ghibliapi.herokuapp.com/people')
.then(function (result){
    return result.json()
})
.then (function(json) {
    // console.log(json);
    displayPic(json);
})

function displayPic(json) {
        let people = json;
        console.log(people[0].name)
        console.log(people)
        for (p of people) {
            let listItem = document.createElement('li');
            // let img = document.createElement('img');
            // img.setAttribute("src", p.films);
            listItem.innerHTML = '<p>' + p.name + 
            '<p>' + "age: " + p.age + '</p>' +
            '<p>' + "eye color: " + p.eye_color + '<p>';
            studioGhibliPeople.appendChild(listItem);
        };   
}

fetch ('https://ghibliapi.herokuapp.com/films')
.then(function (result){
    return result.json()
})
.then (function(json) {
    console.log(json);
    displayFilm(json);
})

function displayFilm(json) {
        let films = json;
        
        for (f of films) {
            let filmList = document.createElement('li');
            let image = document.createElement("img");
            image.setAttribute("src", f.movie_banner)
            filmList.innerHTML = '<p>' + f.title + '</p>';
            
            // var documentFragment = document.createDocumentFragment();
            // documentFragment.appendChild(filmList);

            studioGhibliFilms.appendChild(filmList)
            studioGhibliFilms.appendChild(image);
            
        };  
}

// function displayFilm(event) {
//     fetch ('https://ghibliapi.herokuapp.com/films')
//     .then (function(response) {
//         return response.json ();
//     })
//     .then (function(json) {
//         let films = json;
//         console.log(films);
//         console.log(films[0].title)
//         for (f of films) {
//             let filmList = document.createElement('li');
//             filmList.innerHTML = '<p>' + f.title + '</p>';
//             studioGhibliFilms.appendChild(filmList);
//         };   
//     });
// }




const baseURL = 'https://ghibliapi.herokuapp.com'

let studioGhibliPeople = document.querySelector('.characters');
// let showChar = document.querySelector('.button');
let studioGhibliFilms = document.querySelector('.films');
// showChar.addEventListener('click', displayPic);
// showChar.addEventListener('click', displayFilm);

fetch ('https://ghibliapi.herokuapp.com/films')
.then(function (result){
    return result.json()
})
.then (function(json) {
    // console.log(json);
    displayFilm(json);
})

function displayFilm(json) {
        let films = json;
        
        for (f of films) {
            let filmList = document.createElement('li');
            let image = document.createElement("img");
            image.setAttribute("src", f.movie_banner)
            filmList.innerHTML = '<p>' + f.title + '</p>';
            
            studioGhibliFilms.appendChild(filmList)
            studioGhibliFilms.appendChild(image);
            
        };  
}

fetch ('https://ghibliapi.herokuapp.com/people')
.then(function (result){
    return result.json()
})
.then (function(json) {
    console.log(json);
    displayPic(json);
    displayPazu(json);
    displayDuffi(json);
    displayAshitaka(json);
})

// function displayPic(json) {
//         let people = json;
//         console.log(people[0].name)
//         // console.log(people)
//         for (p of people) {
//             let listItem = document.createElement('li');
//             listItem.setAttribute("id", "info");
//             let img = document.createElement('img');
//             img.setAttribute("src", "assets/haku.jpeg");
//             listItem.innerHTML = '<p>' + p.name +
//             '<p>' + "age: " + p.age + '<p>' +
//             '<p>' + "eye color: " + p.eye_color +
//             '<p>' + "_________________" +'</p>';
            
//             studioGhibliPeople.appendChild(listItem);
//             studioGhibliPeople.appendChild(img);
            
//         };   
// }
function displayPic(json) {
    let people = json[0];
    console.log(people)
    
        let listItem = document.createElement('li');
        listItem.setAttribute("id", "info");
        let img = document.createElement('img');
        img.setAttribute("src", "assets/haku.jpeg");
        listItem.innerHTML = '<p>' + people.name 
        + '<p>' + "age: " + people.age + '<p>' + "eye color: " 
        + people.eye_color + '<p>' + "gender: " +people.gender;
        studioGhibliPeople.appendChild(listItem);
        studioGhibliPeople.appendChild(img);

}
function displayPazu(json) {
    let people = json[1];
    console.log(people)
    
        let listItem = document.createElement('li');
        listItem.setAttribute("id", "info");
        let img = document.createElement('img');
        img.setAttribute("src", "assets/Pazu.jpeg");
        listItem.innerHTML = '<p>' + people.name 
        + '<p>' + "age: " + people.age + '<p>' + "eye color: " 
        + people.eye_color + '<p>' + "gender: " +people.gender;
        studioGhibliPeople.appendChild(listItem);
        studioGhibliPeople.appendChild(img);

}
function displayDuffi(json) {
    let people = json[7];
    console.log(people)
    
        let listItem = document.createElement('li');
        listItem.setAttribute("id", "info");
        let img = document.createElement('img');
        img.setAttribute("src", "assets/duffi.jpeg");
        listItem.innerHTML = '<p>' + people.name 
        + '<p>' + "age: " + people.age + '<p>' + "eye color: " 
        + people.eye_color + '<p>' + "gender: " +people.gender;
        studioGhibliPeople.appendChild(listItem);
        studioGhibliPeople.appendChild(img);

}

function displayAshitaka(json) {
    let people = json[13];
    console.log(people)
    
        let listItem = document.createElement('li');
        listItem.setAttribute("id", "info");
        let img = document.createElement('img');
        img.setAttribute("src", "assets/ashitaka.jpeg");
        listItem.innerHTML = '<p>' + people.name 
        + '<p>' + "age: " + people.age + '<p>' + "eye color: " 
        + people.eye_color + '<p>' + "gender: " +people.gender;
        studioGhibliPeople.appendChild(listItem);
        studioGhibliPeople.appendChild(img);

}






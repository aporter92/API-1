const baseURL = 'https://ghibliapi.herokuapp.com'

let studioGhibliPeople = document.querySelector('ul');
let showChar = document.querySelector('.button');

showChar.addEventListener('click', displayPic);


function displayPic(event) {
    fetch ('https://ghibliapi.herokuapp.com/people')
    .then (function(response) {
        return response.json ();
    })
    .then (function(json) {
        let people = json;
        console.log(people);
        console.log(people[0].name)
        for (p of people) {
            let listItem = document.createElement('li');
            listItem.innerHTML = '<p>' + p.name + '</p>';
            studioGhibliPeople.appendChild(listItem);
        };   
    });
}


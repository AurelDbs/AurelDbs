console.log("Hello from src/browser.js");
const hello = document.getElementById('hello');
console.log(hello);

const list = document.querySelector('.list');
console.log(list);

const lists = document.querySelectorAll('.list');
console.log(lists);

//déclarer une fonction
function hello() {
  console.log('Hello from the function');
}

//en js on peut stocker une fonction dans une variable
cosnt hello = function() {
  console.log('Hello from the function');
}

cosnt hello = () => {
  console.log('Hello from the function');
}

hello();

//ne pas oublier le return sinon quand on appelle la fonction retourne undefined
const square = (value) => {
  return value * value;
};

const square = value => value * value;// en inline pas besoin de return

console.log(square(4));

const capitalize = (word) => {
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}

const capitalize = (word) => {
  word[0].toUpperCase();//mets la premier lettre en maj
  word.substr(1).toLowerCase();//mets le reste du mot en min
  return `${word[0].toUpperCase()}${word.substr(1).toLowerCase()}`
}
console.log(capitalize("MATTHIEU"));
// => retourne Matthieu


//Event Listener//

element.addEventListener(eventType, (event) => {
  // Do something (callback)
});

const romain = document.getElementById("romain");
romain.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.currentTarget);
});

const romain = document.getElementById('romain');
romain.addEventListener("click", () => {
  console.log("clicked");
})

const romain = document.getElementById("romain");
romain.addEventListener("click", (event) => {
  romain.classList.add('img-circle');
});

const romain = document.getElementById("romain");
romain.addEventListener("click", (event) => {
  romain.classList.toggle('img-circle');//toggle => add and remove
});

const aurel = document.getElementById("aurel");
aurel.addEventListener("click", (event) => {
  aurel.classList.toggle('img-circle');//toggle => add and remove
});

// au lieu de répéter le code on itére sur les images de même classe
const images = document.querySelectorAll('.clickable');

images.forEach((image) => {
  image.addEventListener("click", (event) => {
    image.classList.toggle('.img-circle');
  });
});

// une autre façon d'itérer en stockant la fonction dans une constante
// en utilisant event.target

const classToggle = (event) => {
  const image = event.target;
  image.classList.toggle('img-circle');
}

images.forEach((image) => {
  image.addEventListener("click", classToggle);
});

// et avec toutes les fontions dans des constantes
const bindClick = (image) => {
  image.addEventListener("click", classToggle);
}

images.forEach(bindClick);

//*****DOMContentLoaded*****//
document.addEventListener("DOMContentLoaded", () => {
  debugger;
  const images = document.querySelectorAll('.clickable');
  images.forEach(bindClick);
});

// WHAT IF YOU ADD AN IMAGE LATER?
// With a setTimeout or AJAX.

function addImage() {
  const newImage = document.createElement("img");
  newImage.src = "https://kitt.lewagon.com/placeholder/users/ssaunier";
  newImage.style.height = "200px";
  newImage.classList.add("clickable");
  document.body.append(newImage);

  // TODO: what is missing here?
  bindClick(newImage);
}

setTimeout(addImage, 1000);// appelle l'image une fois apres 1000ms
setInterval(addImage, 1000);// appelle l'image toutes les 1000ms


// REMOVING AN EVENT LISTENER
// Use EventTarget.removeEventListener

element.removeEventListener(eventType, listener);


//
const links = document.querySelectorAll('confirmable');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });
});


//******HTTP*****//

// get post put patch delete


//AJAX

fetch('https://swapi.co/api/people');
.then((responde) => response.json())
.then((response) => {
const list = document.getElementById('people');
  response.results.forEach((character) => {
    const name = character.name;
    const height = character.height;
    list.adjacentHTML('beforeend', `<li>${name} ${height}`);
  });
}


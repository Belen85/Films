import './styles.scss';
import { movies } from './src/movies';

// Starting to work- check if everything works fine
// console.log(movies);
// console.log('Belen');
// const firstMovieEx = `${movies[0].imdb}.jpg`;
// const firstMovieTitle = `${movies[0].title}`;
// console.log(movies[0]);

// import $ from 'jquery';
// import 'bootstrap';
// $('body').append('jquery + bootstrap works!');

// every files in "static" folder can be used directly like that
// app.innerHTML += '<img src="images/kitten.jpg" style="width:100px;" />';

const app = document.getElementById('app');
app.innerHTML = '<h1>Films</h1><div id="app1"></div>';
const app1 = document.getElementById('app1');
// app.innerHTML = `<div class="main-container"><img src="posters/${firstMovieEx}">
// <img src="posters/${firstMovieEx}">
// <img src="posters/${firstMovieEx}">
// </div>`;

function populateHtmlContent(arr) {
  let cardContent = `<button id="allFilms">All</button>
  <button id="recentFilms">Recent films only</button>
  <div class="main-container">`;
  for (let i = 0; i < arr.length; i++) {
    cardContent += `<div id="${i}" class="card">`;
    if (arr[i].img === true) {
      cardContent += `<img id="${i}" data-index="${i}" src="posters/${arr[i].imdb}.jpg" class="card-img-top" alt="..."></img>`;
    } else {
      cardContent += `<h5 id="${i}" data-index="${i}" class="card-title ">${arr[i].title}</h5>`;
    }

    cardContent += `<div id="infoMovies${i}" class="info" data-index="${i}">
      <div id="div${i}">
      <i id="${i}" class="fas fa-times"></i>
       </div>     
     </div></div>`;
  }
  cardContent += '</div>';

  app1.innerHTML = cardContent;
}

function populateHtmlContentYear2000(arr) {
  let cardContent = `<button id="allFilms">All</button>
  <button id="recentFilms">Recent films only</button>
  <div class="main-container">`;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].year >= 2000) {
      // console.log(arr[i].year);
      cardContent += `<div id="${i}" class="card">`;
      if (arr[i].img === true) {
        cardContent += `<img id="${i}" data-index="${i}" src="posters/${arr[i].imdb}.jpg" class="card-img-top" alt="..."></img>`;
      } else {
        cardContent += `<h5 id="${i}" data-index="${i}" class="card-title ">${arr[i].title}</h5>`;
      }
      cardContent += `<div id="infoMovies${i}" class="info" data-index="${i}">
        <div id="div${i}">
        <i id="${i}" class="fas fa-times"></i>
       </div>  
     </div></div>`;
    }
  }
  cardContent += '</div>';
  console.log(cardContent);

  app1.innerHTML = cardContent;
}

populateHtmlContent(movies);

// const infoMovies = document.getElementById('infoMovies');

// function showInfo(selector, index) {
//   selector.innerHTML = `<div>
// <p><b>Title</b>: ${movies[index].title}</p>
// <p><b>Genres</b>: ${movies[index].genres}</p>
// <p><b>Year</b>:${movies[index].year}</p>
// <p><b>Plot</b>:${movies[index].plot}</p>
// </div>`;
// }

function popupDiv(e) {
  console.log(e.target);
  const el = e.target;
  const index = el.id;
  console.log(index);
  if (el.matches('img') || el.classList.contains('card-title')) {
    const nomDiv = `div${index}`;
    const nomDivSelector = document.getElementById(nomDiv);
    nomDivSelector.innerHTML = `<p><b>Title</b>: ${movies[index].title}</p>
    <p><b>Genres</b>: ${movies[index].genres}</p>
    <p><b>Year</b>:${movies[index].year}</p>
    <p><b>Plot</b>:${movies[index].plot}</p>
    <i id="${index}" class="fas fa-times"></i>`;
    // console.log(nomDiv);
    // console.log(nomDivSelector);
    const infoMovieSelector = `infoMovies${index}`;
    document.getElementById(infoMovieSelector).style.visibility = 'visible';
    // showInfo(el.dataset.index);
  } else if (el.classList.contains('fa-times')) {
  // div visible->hidden try this
    // const nomDiv = `div${index}`;
    // const nomDivSelector = document.getElementById(nomDiv);
    // nomDivSelector.innerHTML = '';
    // console.log(nomDiv);
    // console.log(nomDivSelector);
    // console.log(index);
    const infoMovieSelector = `infoMovies${index}`;
    document.getElementById(infoMovieSelector).style.visibility = 'hidden';
    // console.log('click on x');
    // populateHtmlContent(movies);
  } else if (el.matches('button')) {
    if (el.id === 'recentFilms') {
      populateHtmlContentYear2000(movies);
    } else if (el.id === 'allFilms') {
      populateHtmlContent(movies);
    }
  }
}

app.addEventListener('click', popupDiv);

// Clock stuff
let clock = document.getElementById('clock');

function updateClock() {
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
  document.getElementById("clock").innerHTML = currentTimeString;
}


// Background stuff
const bg = document.getElementById('bg');

function getBackground() {
    fetch('http://www.splashbase.co/api/v1/images/random')
    .then(result => result.json())
    .then(data => {
        bg.innerHTML = `<img src="${data.url}" />`
    })
};

// Quote stuff
const quote = document.getElementById('quote');
const author = document.getElementById('author');

function getQuote() {
    fetch('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand')
    .then(result => result.json())
    .then(response => {
        quote.innerHTML = `<p>${response[0].content.rendered}</p>`
        author.innerHTML = `<p>${response[0].title.rendered}</p>`
    })
}

// Weather stuff


// Invoke stuff
updateClock(); 
setInterval('updateClock()', 1000 );
getBackground();
getQuote();
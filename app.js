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
};

// Weather stuff
const weather_error = document.getElementById('weather-error');
const weather_icon = document.getElementById('weather-icon');
const temp_value = document.getElementById('temp-value');
const temp_description = document.getElementById('temp-description');
const loc = document.getElementById('loc');

// I have my API key in a .gitignore file, you can uncomment the next line to use a publicly available one, or use your own.
// const key = "82005d27a116c2880c8f0fcb866998a0";

function getWeather(zip = 83642) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}`)
    .then(result => result.json())
    .then(response => {
        temp_value.innerHTML = `<p>${response.main.temp}</p>`;
        temp_description.innerHTML = `<p>${response.weather[0].description}</p>`;
        loc.innerHTML = `<p>${response.name}</p>`;
    })
};

// Invoke stuff
updateClock(); 
setInterval('updateClock()', 1000 );
getBackground();
getQuote();
getWeather();
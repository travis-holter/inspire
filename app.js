// Clock stuff
let clock = document.getElementById('clock');

function updateClock() {
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  // Update the time display
//   document.getElementById("clock").firstChild.nodeValue = currentTimeString;
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

// Invoke stuff
updateClock(); 
setInterval('updateClock()', 1000 );
getBackground();
getQuote();
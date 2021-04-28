// -- variables -- //

// Aboutme and Blog section
var acc = document.getElementsByClassName("accordion");
var i;

// project links
var runbuddy = document.getElementById("runbuddy");
var password = document.getElementById("genetor");
var covid_dashboard = document.getElementById("covid_dash");
var quiz = document.getElementById("quiz");
var weather_app = document.getElementById("weatherapp");
var e_commerce = document.getElementById("ecommerce");
var robotgame = document.getElementById("robotgame");
// footer links
var linkedinlink = document.getElementById("linkedin");
var githublink = document.getElementById("github");
var twitterlink = document.getElementById("twitter");
var facebooklink = document.getElementById("facebook");

// -- functions -- //

// function for missing links
function comingsoon() {
  alert("Link is comming soon!!");
}

// accordion fonction: Aboutme and Blog
function accordion() {
  this.classList.toggle("active");
  var panel = this.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    panel.style.transition = "all 0.5s ease-out";
    panel.style.opacity = 0;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    panel.style.transition = "all 0.5s ease-out";
    panel.style.opacity = 1;
  }
}

// github site
function githubsite() {
  window.open("https://github.com/Dstapleton");
}

// runbuddy web site
function runbuddysite() {
  window.open("https://dstapleton.github.io/RunBuddy/");
}

// password generator app
function genertorapp() {
  window.open("https://dstapleton.github.io/password-generator/");
}

// weather  server side API application
function weatherApp() {
  window.open("https://dstapleton.github.io/WeatherApp/");
}
//
function quzzMe() {
  window.open("https://dstapleton.github.io/Quiz/");
}
//
function covidDashboard() {
  window.open(
    "https://runtime-terrors-organization.github.io/covid-dashboard-application/"
  );
}

function eCommerce() {
  window.open("https://e-commerce-storefront.web.app/");
}
// -- events -- //

//event listener for accordion on aboutme setion
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", accordion);
}
// projects
password.addEventListener("click", genertorapp);
runbuddy.addEventListener("click", runbuddysite);
weather_app.addEventListener("click", weatherApp);
quiz.addEventListener("click", quzzMe);
covid_dashboard.addEventListener("click", covidDashboard);
e_commerce.addEventListener("click", eCommerce);

// media links
linkedinlink.addEventListener("click", comingsoon);
githublink.addEventListener("click", githubsite);
twitterlink.addEventListener("click", comingsoon);
facebooklink.addEventListener("click", comingsoon);

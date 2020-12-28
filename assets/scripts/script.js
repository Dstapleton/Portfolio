// -- variables -- //

// Aboutme and Blog section
var acc = document.getElementsByClassName("accordion");
var i;

// project links
var runbuddy =  document.getElementById("runbuddy");
var password = document.getElementById("genetor");
var unitygame = document.getElementById("unitygameapp");
var quiz = document.getElementById("quiz");
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
function accordion () {
    this.classList.toggle("active");
    var panel= this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.opacity = 0;

    } else {
        panel.style.maxHeight=panel.scrollHeight + "px"
        panel.style.opacity = 1;
    }
}
//
for(i = 0; i < acc.length; i++){
     acc[i].addEventListener("click",accordion);
}
// github site
function githubsite() {
    window.open("https://github.com/Dstapleton");
}

// runbuddy web site
function runbuddysite() {
    window.open("https://dstapleton.github.io/RunBuddy/");
}

//
function genertorapp() {
    window.open("https://dstapleton.github.io/password-generator/");
}
// -- events -- //

// projects
password.addEventListener("click", genertorapp);
runbuddy.addEventListener("click", runbuddysite);

robotgame.addEventListener("click",comingsoon);
quiz.addEventListener("click", comingsoon);
unitygame.addEventListener("click", comingsoon);

// media links
linkedinlink.addEventListener("click",comingsoon);
githublink.addEventListener("click", githubsite);
twitterlink.addEventListener("click", comingsoon);
facebooklink.addEventListener("click", comingsoon);
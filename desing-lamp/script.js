//to move the div to specific location:
function div_position(id, seconds) {
    let myDiv = document.getElementById(id);

    let window_width = window.innerWidth;
    let window_height = window.innerHeight;

    let x = window_width * Math.random();
    myDiv.style.left = x + "px";

    let y = window_height * Math.random();
    myDiv.style.top = y + "px";

    myDiv.style.transition =
        "top " + seconds + "ms ease,left " + seconds + "ms ease";
}

//intervals for moving divs:
let interval1 = setInterval(function() {
    div_position("div1", 5500);
}, 5500);
let interval2 = setInterval(function() {
    div_position("div2", 5200);
}, 5200);
let interval3 = setInterval(function() {
    div_position("div3", 4200);
}, 4200);
let interval4 = setInterval(function() {
    div_position("div4", 5100);
}, 5100);
let interval5 = setInterval(function() {
    div_position("div5", 6000);
}, 6000);
let interval6 = setInterval(function() {
    div_position("div6", 6400);
}, 6400);
let interval7 = setInterval(function() {
    div_position("div7", 6000);
}, 6000);
let interval8 = setInterval(function() {
    div_position("div8", 6200);
}, 6200);
let interval9 = setInterval(function() {
    div_position("div9", 4800);
}, 4800);
let interval10 = setInterval(function() {
    div_position("div10", 5600);
}, 5600);
//to show the image in a larger div:
function handleMaximization(id, url) {
    let myDiv = document.getElementById(id);
    let img_presenter = document.getElementById("img-presenter");
    img_presenter.style.visibility = "visible";
    img_presenter.style.width = "70%";
    img_presenter.style.height = "70%";
    img_presenter.style.backgroundImage = "url(" + "'" + url + "')";
    //visible close button:
    let close_button = document.getElementById("close-button");
    close_button.style.visibility = "visible";
}

function closeImage() {
    //hide image presenter:
    let img_presenter = document.getElementById("img-presenter");
    img_presenter.style.visibility = "hidden";
    img_presenter.style.width = "100%";
    img_presenter.style.height = "auto";

    //hide close button:
    let close_button = document.getElementById("close-button");
    close_button.style.visibility = "hidden";
}
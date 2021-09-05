// Method 1 using .src

var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

document.getElementsByClassName('img1')[0].src = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);

document.getElementsByClassName('img2')[0].src = "images/dice" + randomNumber2 + ".png";

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = "player 1 wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector('h1').innerHTML = "player 2 wins";
} else {
  document.querySelector('h1').innerHTML = "draw";
}

// Method 2 using setAttribute

var random1 = Math.floor(Math.random()*6)+1;

var imgsrc1 = "images/dice" + random1 + ".png"

var change1 = document.getElementsByClassName('img1')[0];

change1.setAttribute("src", imgsrc1);


var random2 = Math.floor(Math.random()*6)+1;

var imgsrc2 = "images/dice" + random2 + ".png"

var change2 = document.getElementsByClassName('img2')[0];

change2.setAttribute("src", imgsrc2);


if (random1 > random2) {
  document.querySelector('h1').innerHTML = "player 1 wins";
} else if (random2 > random1) {
  document.querySelector('h1').innerHTML = "player 2 wins";
} else {
  document.querySelector('h1').innerHTML = "draw";
}

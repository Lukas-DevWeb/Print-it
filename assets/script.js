const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Variables
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

const dots = document.querySelector("dots");
let banner = document.querySelector(".banner-img");
let subtitle = document.querySelector("#banner > p");

let dot = document.querySelectorAll(".dot");
  

let counter = 0;
let imgLenght = slides.length;

// Bullet points
//Création des dots dans le div dots en fonction du nombre d'image dans slides
for (let i = 0; i < imgLenght; i++) {
	dots.innerHTML = dots.innerHTML + "<span class='dot'></span>";
  }


banner.src = "./assets/images/slideshow/" + slides[0].image;
subtitle.innerHTML = slides[0].tagLine;
dot[0].classList.add("dot_selected");




// Evenlistener clic gauche
arrowLeft.addEventListener("click", function(){
	console.log("tu as cliqué sur la flèche de gauche")
})


// Evenlistener clic droit
arrowRight.addEventListener("click", function(){
	console.log("tu as cliqué sur la flèche de droite")
})

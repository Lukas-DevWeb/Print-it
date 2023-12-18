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

let counter = 0;
let imgLenght = slides.length;

// Bullet points






// Evenlistener clic gauche
arrowLeft.addEventListener("click", function(){
	console.log("tu as cliqué sur la flèche de gauche")
})


// Evenlistener clic droit
arrowRight.addEventListener("click", function(){
	console.log("tu as cliqué sur la flèche de droite")
})

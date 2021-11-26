"use-strict";

/***********
 * VARIABLES
 ***********/

let slide;
let state = { index: 0 };
let diaporama;

/***********
 * FUNCTIONS
 ***********/
/**
 * Afficher la photo en cours de visionnage
 */
function refreshSlider() {
	document.querySelector("#slider img").src = `images/${
		slides[state.index].src
	}`;
	document.querySelector("#slider figcaption").textContent = `${
		slides[state.index].legend
	}`;
}

function toolbarToggle() {
	document.querySelector(".toolbar ul").classList.toggle("hide");

	const icon = document.querySelector("#toolbar-toggle i");
	icon.classList.toggle("fa-arrow-right");
	icon.classList.toggle("fa-arrow-down");
}
/**
 * Passer à la fonction suivante
 */
function next() {
	//incrémente state.index
	state.index++;
	if (state.index > slides.length - 1) {
		state.index = 0;
	}
	// fait appel à refresh slider
	refreshSlider();
}

function previous() {
	//incrémente state.index
	state.index--;
	if (state.index < 0) {
		state.index = slides.length - 1;
	}
	// fait appel à refresh slider
	refreshSlider();
}

function random() {
	let nb = getRandomInt(0, slides.length - 1);
	while (nb == state.index) {
		nb = getRandomInt(0, slides.length - 1);
	}
	state.index = nb;
	refreshSlider();
	console.log(nb);
}

function diapo() {
	if (
		document.querySelector("#slider-toggle i").classList.contains("fa-play")
	) {
		document
			.querySelector("#slider-toggle i")
			.classList.replace("fa-play", "fa-pause");
		diaporama = setInterval(next, 2000);
	} else {
		document
			.querySelector("#slider-toggle i")
			.classList.replace("fa-pause", "fa-play");
		clearInterval(diaporama);
	}
}

/***********
 * MAIN CODE
 ***********/

slides = [
	{ src: "1.jpg", legend: "Super Pandas Bros" },
	{ src: "2.jpg", legend: "Yoga seul loin du monde" },
	{ src: "3.jpg", legend: "Sunset (please note : no humans)" },
	{ src: "4.jpg", legend: "Stars (also no humans)" },
	{ src: "5.jpg", legend: "Tea-time British Style" },
	{ src: "6.jpg", legend: "Tiramisu - Diabète style !" },
];

// document.querySelector.addEventListener("DOMContentLoader", function () {});

let toolbar = document
	.querySelector("#toolbar-toggle")
	.addEventListener("click", toolbarToggle);
refreshSlider();
// initializeCarousel();

document.querySelector("#slider-next").addEventListener("click", next);

document.querySelector("#slider-previous").addEventListener("click", previous);

document.querySelector("#slider-random").addEventListener("click", random);

document.querySelector("#slider-toggle").addEventListener("click", diapo);

let test = 0;

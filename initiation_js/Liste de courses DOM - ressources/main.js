"use strict";

/*******************
 * ---VARIABLES--- *
 *******************/

let shoppingList = [];

/*******************
 * ---FUNCTIONS--- *
 *******************/

function addItem(item) {
	//ajoute l'aliment tapé par l'utilisateur dans un tableau
	shoppingList.push(item);
	displayList();
}

function getValue() {
	//renvoie la valeur saisi par l'utilisateur puis appelle la fonction qui l'ajoute dans un tableau
	let item = document.querySelector("#toAdd").value.toLowerCase();
	addItem(item);
	document.querySelector("form").reset();
}

function displayList() {
	//afficher le contenu du tableau dans l'ul
	let display = document.querySelector(".list");
	display.innerHTML = "";
	for (let item of shoppingList) {
		display.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
	}

	document.querySelector("h2").textContent =
		"La liste contient " + shoppingList.length + " articles.";
}

function emptyList() {
	shoppingList = [];
	displayList();
}

/*******************
 * ---MAIN CODE--- *
 *******************/

// displayList();
document.querySelector("#submit").addEventListener("click", getValue);
document.querySelector("#delete").addEventListener("click", emptyList);

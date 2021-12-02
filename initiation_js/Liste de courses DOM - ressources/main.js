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

function getValue(selector, fct) {
	//renvoie la valeur saisi par l'utilisateur puis appelle la fonction qui l'ajoute dans un tableau
	let item = document.querySelector(selector).value.toLowerCase();
	fct(item);
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

function popup() {
	document.querySelector("#popup").classList.toggle("hide");
}

function removeOneItem(item) {
	console.log(shoppingList);
	let index = shoppingList.indexOf(item);
	console.log(index);

	if (index == -1) {
		// Oui, affichage d'une erreur.
		alert(
			"ERREUR : le produit " + item + " n'existe dans la liste de courses"
		);

		// Fin de la fonction removeItem(), il ne faut pas aller plus loin.
		return;
	}

	// Suppression du produit spécifié dans la liste de courses (le tableau diminue de taille).
	shoppingList.splice(index, 1);
	displayShoppingList();
	togglePopup();
}

/*******************
 * ---MAIN CODE--- *
 *******************/

// displayList();
document.querySelector("#submit").addEventListener("click", function () {
	getValue("#toAdd", addItem);
});
document.querySelector("#popup").addEventListener("click", function () {
	getValue("#toDelete", removeOneItem);
});
document.querySelector("#delete").addEventListener("click", emptyList);
document.querySelector("#deleteOne").addEventListener("click", popup);
document.querySelector("span").addEventListener("click", popup);
document.querySelector("#btnDelete").addEventListener("click", removeOneItem);

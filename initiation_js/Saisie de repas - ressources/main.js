// Julien Froment
"use strict";

/*******************
 * ---VARIABLES--- *
 *******************/

// tableau avec 10 valeurs en dur
let menu = [
	"Pizza",
	"Couscous",
	"Risotto",
	"Burger",
	"Panini",
	"Bo bun",
	"Pad thai",
	"Frites",
	"Falafels",
	"Champignons farcis",
];

/*******************
 * ---FUNCTIONS--- *
 *******************/

function displayMeals() {
	//une variable qui cible la div meals pour pas se répéter
	const MEALS = document.querySelector("#meals");

	//affiche le nombre de plats qu'il y a au menu
	MEALS.innerHTML =
		"<h3>Il y a " + menu.length + " plats dans le menu :</h3>";

	MEALS.innerHTML += "<ul></ul>";
	//boucle sur le tableau de plats pour les afficher un par un dans la liste
	for (let meal of menu) {
		document
			.querySelector("#meals ul")
			.insertAdjacentHTML("beforeend", `<li>${meal}</li>`);
	}
}

//une fonction qui met la 1ere lettre du mot en majuscule et laisse le reste en minuscule, comme ça si on tape pouTINE il retourne bien Poutine.
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function addMeal() {
	//je récupère la valeur saisie dans l'input
	let newMeal = document.querySelector("#prompt").value.trim();

	//je lui passe ma fonction qui lui met la 1ère lettre en maj
	newMeal = capitalizeFirstLetter(newMeal);

	// si la saisie est vide, j'alerte l'utilisateur
	if (newMeal === "") {
		alert("ERREUR : Vous n'avez entré aucun plat !");

		//si l'index du nouveau plat équivaut à -1 (en gros s'il n'existe pas dans mon tableau), j'ajoute la valeur saisie dans le tableau du menu et je préviens l'utilisateur
	} else if (menu.indexOf(newMeal) === -1) {
		alert(newMeal + " a bien été ajouté au menu");
		menu.push(newMeal);

		//sinon je lui dis que le plat qu'il a saisi est déjà présent au menu
	} else {
		alert("Désolé, " + newMeal + " existe déjà dans le menu !");
	}

	//je reset le formulaire pour que le plat saisi n'apparaise pas après l'avoir ajouté
	document.querySelector("form").reset();

	//j'appelle la fonction displayMeals pour mettre à jour le menu avec la nouvelle valeur
	displayMeals();
}

/*******************
 * ---MAIN CODE--- *
 *******************/

// je charge mon code JS uniquement lorsque ma page HTML est chargée
document.addEventListener("DOMContentLoaded", function () {
	displayMeals();
	document.querySelector("#submit").addEventListener("click", addMeal);
});

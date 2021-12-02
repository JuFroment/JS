"use strict";

/*******************
 * ---VARIABLES--- *
 *******************/

/*******************
 * ---FUNCTIONS--- *
 *******************/

function callAPI() {
	let input = document.querySelector("#firstname").value.trim();
	if (input != "") {
		fetch(`https://api.agify.io/?name=${input}`)
			.then((response) => response.json())
			.then((datas) => displayStuff(datas))
			.catch((error) => alert("Erreur : " + error));
	}
}

function displayStuff(datas) {
	callAPI();
	document.querySelector("article").classList.remove("hide");
	document.querySelector(
		"article h2"
	).innerHTML = `D'après Agify, avec le prénom ${datas.name}, tu as ${datas.age} ans.`;
	document.querySelector("article p strong").textContent = `${datas.count}`;
}

/*******************
 * ---MAIN CODE--- *
 *******************/
document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#submit").addEventListener("click", callAPI);
	document.querySelector("#submit").addEventListener("click", displayStuff);
});

"use-strict";
/***************************************************
 *** Demande à l'utilisateur de renseigner un nombre
 *** @param {string*} message
 *** @param {min} min
 *** @param {max} max
 *** @returns {number} nombre saisi
 ***************************************************/
function requestInt(message, min, max) {
	let nb;
	do {
		nb = parseInt(prompt(message, 1));
	} while (isNaN(nb) || nb < 1 || nb > 3);
	return nb;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

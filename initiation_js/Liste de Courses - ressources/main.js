"use-strict";

/***********
 * VARIABLES
 ***********/

let nb;
let shoppingList = [];
let newItem;
let deletedItem;

/***********
 * FUCTIONS
 ***********/
function addItem() {
	newItem = shoppingList.push(
		prompt("Que voulez-vous rajouter à votre liste de courses ?")
	);
	newItem.toLowerCase;
}

function showList() {
	console.log(shoppingList);
	console.log(
		"Votre liste de course contient " + shoppingList.length + " produits."
	);
}

function deleteItem() {
	deletedItem = prompt("Quel item voulez vous retirer de la liste ? ");
	deletedItem.toLowerCase;
	if (shoppingList.indexOf(deletedItem) == -1) {
		console.log(
			"Désolé, " +
				deletedItem +
				" n'est pas présent dans la liste de courses."
		);
	}
	let pos = shoppingList.indexOf(deletedItem);
	shoppingList.splice(pos, indexOf(deletedItem));
	console.log(shoppingList);
}

/***********
 * MAIN CODE
 ***********/

nb = parseInt(prompt("Combien de produits comptez-vous acheter ?"));
while (shoppingList.length < nb) {
	addItem();
}
showList();
deleteItem();

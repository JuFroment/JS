"use-strict";
/***********
 * VARIABLES
 ***********/
let selectAllPhotos = document.querySelector("#selectAll");
let deselectAllPhotos = document.querySelector("#deselectAll");
let photo = document.querySelectorAll(".photo-list li");
let total = document.querySelector("#total em");

/***********
 * FUNCTIONS
 ***********/

function count() {
	let selectedPhotos = document.querySelectorAll(".photo-list li.selected");
	total.textContent = selectedPhotos.length;
	if (count == 0) {
		total.style.color = "blue";
	} else if (count == 10) {
		total.style.color = "yellow";
	} else {
		total.style.color = "white";
	}
}

function onClickListItem() {
	this.classList.toggle("selected");
	count();
}

function selectAll() {
	photo.forEach((li) => li.classList.add("selected"));
	count();
}

function deselectAll() {
	photo.forEach((li) => li.classList.remove("selected"));
	count();
}

/***********
 * MAIN CODE
 ***********/

for (let i = 0; i < photo.length; i++) {
	photo[i].addEventListener("click", onClickListItem);
}

selectAllPhotos.addEventListener("click", selectAll);
deselectAllPhotos.addEventListener("click", deselectAll);

let test = 0;

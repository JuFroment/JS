"use-strict";

/***********
 * VARIABLES
 ***********/

let content;
let button;

/***********
 * FUNCTIONS
 ***********/

function generateHTML() {
	console.log("ok");
	content.innerHTML = "<h1 contenteditable='true'>Hello World</h1>";
}

/***********
 * MAIN CODE
 ***********/

content = document.querySelector("#content");
button = document.querySelectorAll("aside button");
for (let i = 0; i < button.length; i++) {
	button[i] = document.addEventListener("click", generateHTML);
}

"use-strict";

let rectangle = document.querySelector(".rectangle");

function onClickButton() {
    console.log("click btn ok");
    rectangle.classList.toggle("hide");
}

function onHover() {
    rectangle.classList.add("important");
}

function onHoverOut() {
    rectangle.classList.remove("important", "good");
}

function doubleClick() {
    rectangle.classList.toggle("good");
}

document
    .querySelector("#toggle-rectangle")
    .addEventListener("click", onClickButton );

document
    .querySelector(".rectangle")
    .addEventListener("mouseover", onHover);


document
    .querySelector(".rectangle")
    .addEventListener("mouseout", onHoverOut);

document
    .querySelector(".rectangle")
    .addEventListener("dblclick", doubleClick);
// mouseout
// dblclick
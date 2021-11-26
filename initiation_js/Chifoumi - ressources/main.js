"use-strict";

let player
let computer
let random
do {
player = prompt("pierre, feuille ou ciseaux ?").toLowerCase();
} while (player != "pierre" && player !="feuille" && player !="ciseaux");
console.log(player);

random = Math.random();
console.log(random);

if (random <= (1/3)){
    computer = "pierre";
} else if (random > (1/3) && random <= (2/3)) {
    computer = "feuille";
} else {
    computer = "ciseaux";
}
console.log(computer);

let div = document.querySelector("#content");

if (computer == player) {
    div.innerHTML = `<p>Égalité !</p>`;
}

else {
    switch (player) {
        case "pierre": 
        if (computer === "feuille") {
            div.innerHTML = `<p>Vous :<img src="img/${player}.png" height="100px" width="100px" />L'ordinateur<img src="img/${computer}.png" height="100px" width="100px"/></p><p>La ${computer} recouvre la ${player} : c'est perdu !</p>`;
        } else {
            div.innerHTML = `<p>Vous :<img src="img/${player}.png" height="100px" width="100px" />L'ordinateur<img src="img/${computer}.png" height="100px" width="100px"/></p><p>La ${player} casse les ${computer} : c'est gagné !</p>`;
        }
            break;
        case "feuille": 
        if (computer === "pierre") {
            div.innerHTML = `<p>Vous :<img src="img/${player}.png" height="100px" width="100px"/>L'ordinateur<img src="img/${computer}.png" height="100px" width="100px"/></p><p>La ${player} recouvre la ${computer} : c'est gagné !</p>`;
        } else {
            div.innerHTML = `<p>Vous :<img src="img/${player}.png" height="100px" width="100px"/>L'ordinateur<img src="img/${computer}.png" height="100px" width="100px"/></p><p>Les ${computer} découpe la ${player} : c'est perdu !</p>`;
        }
            break;
        case "ciseaux":
            if (computer === "pierre") {
                div.innerHTML = `<p>Vous :<img src="img/${player}.png" height="100px" width="100px"/>L'ordinateur<img src="img/${computer}.png" height="100px" width="100px"/></p><p>La ${computer} casse les ${player} : c'est perdu !</p>`;
            } else {
                div.innerHTML = `<p>Vous :<img src="img/${player}.png" height="100px" width="100px"/>L'ordinateur<img src="img/${computer}.png" height="100px" width="100px"/></p><p>Les ${player} découpent la ${computer} : c'est gagné !</p>`;
            }
            break;
    }
}
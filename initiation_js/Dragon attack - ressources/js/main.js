"use-strict";




/****************** 
 *    VARIABLES
******************/

let game = new Object();
const DIV = document.querySelector("#game");

/****************** 
 *    FONCTIONS
******************/    

function initializeGame() {

    game.round = 1 

    game.difficulty = requestInt("Niveau de difficulté ? \n 1. Easy peasy - 2. Meh - 3. Hardcoooore", 1, 3);

    switch (game.difficulty) {
        case 1: 
            game.hpKnight = getRandomInt(200, 250);
            game.hpDragon = getRandomInt(150, 200);
            break;
        case 2: 
            game.hpKnight = getRandomInt(200, 250);
            game.hpDragon = getRandomInt(200, 250);
            break;
        case 3: 
            game.hpKnight = getRandomInt(150, 200);
            game.hpDragon = getRandomInt(200, 250);
            break;
    }

    game.armor = requestInt("Quelle armure désirez-vous porter face à la bêyte ? \n 1. Cuivre - 2. Fer - 3. Magique");
        
    switch (game.armor) {
        case 1:
            game.armorRatio = 1;
            break;
        case 2:
            game.armorRatio = 0.75;
            break;
        case 3:
            game.armorRatio = 0.5;
            break;
    }

    game.sword = requestInt("Avec quelle armoiment désirez-vous poutrer ce noble dragon ? ? \n 1. Bois - 2. Acier - 3. Excalibur", 1, 3);

    switch (game.sword) {
        case 1:
            game.swordRatio = 0.5
            break;
        case 2:
        game.swordRatio = 1;
            break;
        case 3:
        game.swordRatio = 1.5;
            break;
    }

    DIV.innerHTML = "<h3> Points de vie de départ</h3>";
    DIV.innerHTML += 
    `<table>
        <thead>
            <tr>
                <th>Personnage</th>
                <th>HP</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Dragon</td>
                <td>${game.hpDragon}</td>
            </tr>
            <tr>
                <td>Chevalier</td>
                <td>${game.hpKnight}</td>
            </tr>
        </tbody>
    </table>`
}

function computeDragonDamage(){
    let damage;
    if (game.difficulty == 1) {
        damage = getRandomInt(10, 20);
    } else {
        damage = getRandomInt(20, 30);
    }
    return Math.floor(damage / game.armorRatio);
}
function computeKnightDamage(){
    let damage;
        switch (game.difficulty) {
            case 1: 
                damage = getRandomInt(25, 30);
                break;
            case 2: 
                damge = getRandomInt(15, 20);
                break;
            case 3: 
                damage = getRandomInt(5, 10);
                break;
        }
    return Math.floor(damage * game.swordRatio);
}

function gameLoop() {
    console.log("combat tour par tour");
    let damage;
    do {
        // afficher n° du tour
        console.log("---Tour n° " + game.round + "---");
        DIV.innerHTML += `<h2>--- Tour n°${game.round} ---</h2>`;

        // afficher qui est le plus rapide + afficher les dégats infligés
        let vitesse = getRandomInt(1, 2);
        if (vitesse == 1) {
            console.log(damage);
            damage = computeDragonDamage();
            game.hpKnight -= damage;
            if (game.hpKnight < 0) game.hpKnight = 0;
            DIV.innerHTML += `<p>Le dragon est rapide sa mère et vous brûle vos petites fesses...Il
			vous inflige ${damage} dégats.</p>`;
        } else {
            console.log(damage);
            game.hpDragon -= damage;
            if (game.hpDragon < 0) game.hpDragon = 0;
            DIV.innerHTML += `<p>Tel un Flash des temps anciens, vous attaquez le dragon avant qu'il n'ait le temps de réagir...Vous lui infligez ${damage} dégats.</p>`;
            damage = computeKnightDamage();
        }
        
        // afficher hp restants
        DIV.innerHTML += 
        `<table>
            <thead>
                <tr>
                    <th>Personnage</th>
                    <th>HP</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dragon</td>
                    <td>${game.hpDragon}</td>
                </tr>
                <tr>
                    <td>Chevalier</td>
                    <td>${game.hpKnight}</td>
                </tr>
            </tbody>
        </table>`
        
        game.round ++;

    } while (game.hpDragon > 0 && game.hpKnight > 0 );
}

function showWinner() {
    if (game.hpDragon <= 0) {
        DIV.innerHTML = `<article>
    <img src="img/knight.png" />
    <h3>Vous avez ratatiné le dragon, congrations !</h3>
    <p>Il vous restait ${game.hpKnight} PV.</p>
    </article>` + DIV.innerHTML;
    } else {
        DIV.innerHTML = `<article>
    <img src="img/dragon.png" />
    <h3>Vous êtes mort, brûlé, carbonisé et re-mort !</h3>
    <p>Il restait ${game.hpDragon} PV à la bayte.</p>
    </article>` + DIV.innerHTML;
    }
}

/****************** 
 *  CODE PRINCIPAL
******************/


initializeGame();
gameLoop();
showWinner();






console.log(game);

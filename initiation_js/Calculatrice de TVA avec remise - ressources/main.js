"use-strict";

const TAUX_TVA = 20;

let montantHT;
let montantTVA;
let montantTTC;

montantHT = prompt("Quel est le montant HT ?");
montantHT = parseInt(montantHT);

let remise = prompt("Avez-vous une remise ?");

if (remise === "oui" || remise === "yes") {
    let montantRemise = parseFloat(prompt("Quel est le montant de votre remise ?"));
    montantHT -= (montantRemise*montantHT)/100;   
} else {
    remise = 0;
    alert("Vous n'avez pas de remise !");
}

montantTVA = (montantHT * TAUX_TVA) / 100;
montantTTC = montantHT + montantTVA;


const DIV = document.querySelector("#content");
DIV.innerHTML = `<p> Pour un montant HT de ${montantHT} € il y a ${montantTVA} € de TVA </p>
<p>Le montant TTC est donc de ${montantTTC}</p>`;

if (montantRemise != undefined)  {
    DIV.innerHTML += `<p> Une remise de ${montantRemise} % a été appliquée.</p>`;
} else {
    DIV.innerHTML += `<p> Aucune remise n'a été appliquée </p>`;
}






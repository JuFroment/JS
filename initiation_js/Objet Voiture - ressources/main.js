"use-strict";

let voiture = {
    marque: "Renault Twingo 3",
    anneeFabrication: 2014,
    dateAchat: new Date('2015-07-31'),
    passagers: ["Audrey", "Gribouille"]
};

document.querySelector("#content").innerHTML = 
`<p> Informations sur la voiture : <br>
<ul>
    <li>Marque : ${voiture.marque}</li>
    <li>Année de Fabrication : ${voiture.anneeFabrication}</li>
    <li>Date de l'achat : ${voiture.dateAchat.toDateString()} </li>
    <li>Passagers : </li>
        <ol>
            <li>${voiture.passagers[0]}
            <li>${voiture.passagers[1]}
        </ol>
    </li>
</ul>`;




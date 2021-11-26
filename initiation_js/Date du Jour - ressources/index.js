"use strict";

// let today = new Date ();
// let options = {weekday :'long', month: 'long', day :'2-digit', year : 'numeric'}

// let div = document.querySelector(".date");
// div.textContent = today.toLocaleDateString("fr-FR", options);

let weekDays = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
let month = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]



let today = new Date();

let dayIndex = today.getDay()
console.log(weekDays[dayIndex]);

let dayNumber =  today.getDate();
console.log(dayNumber)

let monthIndex = today.getMonth();
console.log(month[monthIndex]);

let year = today.getFullYear();
console.log(year);

document.querySelector("#content").innerHTML = `<p>Nous sommes le ${weekDays[dayIndex]} ${dayNumber} ${month[monthIndex]} ${year}.</p>`;
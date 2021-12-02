"use strict";

/*******************
 * ---VARIABLES--- *
 *******************/

/*******************
 * ---FUNCTIONS--- *
 *******************/

function displayHTML(htmlDatas) {
	$("#target").html(htmlDatas);
}
function displayJSON(jsonDatas) {
	console.log(jsonDatas);
	$("#target").html("<ul></ul>");
	jsonDatas.forEach((element) => {
		$("#target ul").append(
			`<li>${element.firstName} ${element.phone}</li>`
		);
	});
}

function displayJSON(jsonDatasMovies) {
	$("#target").html(`<ul class="movie-list"></ul>`);
	jsonDatasMovies.forEach((element) => {
		$("#target ul").append(`<li>
        <img src="images/${element.cover}">
        <p>
        <strong>${element.title} </strong> -  <em>${element.duration}</em></p></li>`);
	});
}

function onClickExecute() {
	//récup la valeur de l'input coché
	let input = $('input[name="what"]:checked').val();
	switch (input) {
		case "1":
			$.get("data/1-get-html-article.html", displayHTML);
			break;

		case "2":
			$.getJSON("data/2-get-contacts-list.json", displayJSON);
			break;

		case "3":
			$.get("data/3-get-html-movies.html", displayHTML);
			break;

		case "4":
			$.getJSON("data/4-get-json-movies.json", displayJSON);
			break;
	}
}
//en fonction de cette valeur, gérer l'appel AJAX

/*******************
 * ---MAIN CODE--- *
 *******************/

$(document).ready(function () {
	$("#run").on("click", onClickExecute);
});

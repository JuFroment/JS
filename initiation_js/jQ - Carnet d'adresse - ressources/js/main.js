"use strict";

/*******************
 * ---VARIABLES--- *
 *******************/
let FORM;

let inputJSON;
let storedContact;

/*******************
 * ---FUNCTIONS--- *
 *******************/

function showForm() {
	FORM.removeClass("hide");
	FORM.trigger("reset");
}

function saveContact() {
	let input = loadDatas();
	let contact = {};
	contact.title = $("#title option:selected").text();
	contact.lastName = $("#lastName").val().trim();
	contact.firstName = $("#firstName").val().trim();
	contact.phone = $("#phone").val().trim();

	input.push(contact);
	inputJSON = JSON.stringify(input);
	localStorage.setItem("contact", inputJSON);

	FORM[0].reset();
	displayList();
	FORM.addClass("hide");
}

function displayList() {
	let input = loadDatas();
	$("#address-book").html("<ul>");

	for (let contact of input) {
		$("#address-book ul").append(
			`<li>${contact.title} ${contact.firstName} ${contact.lastName} ${contact.phone}</li>`
		);
	}
}

function loadDatas() {
	let datas = JSON.parse(localStorage.getItem("contact"));
	if (datas === null) datas = [];
	return datas;
}
/*******************
 * ---MAIN CODE--- *
 *******************/
$(document).ready(function () {
	displayList();

	FORM = $("#contact-form");

	$("#add-contact").on("click", showForm);
	$("#save-contact").on("click", saveContact);
});

// let recup = localStorage.getItem("contact");
// storedContact = JSON.parse(recup);

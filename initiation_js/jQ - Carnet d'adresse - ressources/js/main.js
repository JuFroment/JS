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
	contact.title = $("#title").val();
	contact.lastName = $("#lastName").val().trim();
	contact.firstName = $("#firstName").val().trim();
	contact.phone = $("#phone").val().trim();

	if (FORM.data("mode") == "add") {
		input.push(contact);
	} else {
		let index = $("#contact-details a").data("index");
		input[index] = contact;
	}

	// } else {
	// 	let index = $('#contact-details a').data('index');
	// 	contact[index] = user;

	inputJSON = JSON.stringify(input);
	localStorage.setItem("contact", inputJSON);

	FORM[0].reset();
	displayList();
	FORM.addClass("hide");
}

function displayList() {
	let input = loadDatas();
	$("#address-book").html("<ul>");

	input.forEach((contact, index) => {
		$("#address-book ul").append(
			`<li><a data-index="${index}">${displayTitle(contact.title)} ${
				contact.firstName
			} ${contact.lastName}</a></li>`
		);
	});
}

function loadDatas() {
	let datas = JSON.parse(localStorage.getItem("contact"));
	if (datas === null) datas = [];
	return datas;
}

function displayDetails() {
	//récupère le tableau des données dans le JS
	let input = loadDatas();
	//récupère l'index du contact stsocké dans son data-index (dans la balise html)
	let index = this.dataset.index;
	//dans le tableau récupère l'objet à la ligne correspondant à l'index du contact
	let contact = input[index];

	//remplir le aside>h3 avec title, nom, prénom
	$("#contact-details h3").text(
		`${displayTitle(contact.title)} ${contact.firstName} ${
			contact.lastName
		}`
	);
	//remplir le aside>p avec le tel
	$("#contact-details p").text(contact.phone);
	// afficher le aside
	$("#contact-details").removeClass("hide");
	$("#contact-details a").data("index", index);
}

function displayTitle(title) {
	let textTitle = "";
	switch (title) {
		case "1":
			textTitle = "Mme.";
			break;
		case "2":
			textTitle = "Mlle.";
			break;
		case "3":
			textTitle = "M.";
			break;
	}
	return textTitle;
}

function editContact() {
	let input = loadDatas();
	let index = $("#contact-details a").data("index");
	let contact = input[index];

	$("#title").val(contact.title);
	$("#lastName").val(contact.lastName);
	$("#firstName").val(contact.firstName);
	$("#phone").val(contact.phone);

	FORM.removeClass("hide").attr("data-mode", "edit");
	$("#contact-details").addClass("hide");
}
/*******************
 * ---MAIN CODE--- *
 *******************/
$(document).ready(function () {
	displayList();

	FORM = $("#contact-form");

	$("#add-contact").on("click", showForm);

	$("#save-contact").on("click", saveContact);

	$("#contact-details a").on("click", editContact);

	//gestionnaire d'event sur un élément qui sera créé dans le futur par le JS
	$("#address-book").on("click", "li a", displayDetails);
});

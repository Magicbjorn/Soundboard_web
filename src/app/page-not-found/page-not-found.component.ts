import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
	selector: "page-not-found",
	templateUrl: "./page-not-found.component.html"
})
export class PageNotFoundComponent implements OnInit {
	faqQuestionOpen = false;

	faqQuestions = [
		{ "id": 0, "question": "Ik krijg een -pagina niet gevonden- pagina. Wat moet ik doen?"},
		{ "id": 1, "question": "Ik ben niet thuis bij bezorging. Wat kan ik doen?"},
		{ "id": 2, "question": "Wat kan ik doen wanneer mijn bestelling niet is bezorgd?"},
		{ "id": 3, "question": "Kan ik mijn bezorgmoment wijzigen?"},
		{ "id": 4, "question": "Wat betekent mijn Track & Trace status?"}
	];

	constructor(private location: Location) {}

	ngOnInit() {}

	goBack() {
		this.location.back();
	}

	faqClicked(event) {
		event.currentTarget.children[2].classList.toggle('open');
		event.currentTarget.children[1].classList.toggle('open');
	}
}

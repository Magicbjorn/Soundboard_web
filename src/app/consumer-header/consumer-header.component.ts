import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumer-header',
  templateUrl: './consumer-header.component.html'
})
export class ConsumerHeaderComponent implements OnInit {
	showLanguage = false;
	showMobileMenu = false;

	constructor() { }

	ngOnInit() {
	}

	showLanguages() {
		this.showLanguage = !this.showLanguage;
	}

	changeLanguage(event) {
		console.log(event.currentTarget.id);
		//Add code to change language. Can use `event` for ID/lang retrieval.
	}

	hamburgerClick() {
		this.showMobileMenu = !this.showMobileMenu;
	}

	closeMobileMenu() {
		this.showMobileMenu = false;
	}
}
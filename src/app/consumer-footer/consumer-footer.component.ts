import { Component, HostListener, OnInit } from "@angular/core";

@Component({
	selector: "app-consumer-footer",
	templateUrl: "./consumer-footer.component.html"
})
export class ConsumerFooterComponent implements OnInit {
	currentYear;
	showScrollToTop = false;

	constructor() {}

	ngOnInit() {
		this.currentYear = new Date().getFullYear();
	}

	@HostListener("window:scroll", ["$event"])
	checkScroll() {
		if (window.scrollY > 135) {
			this.showScrollToTop = true;
		} else {
			this.showScrollToTop = false;
		}
	}

	scrollToTop() {
		window.scrollTo(0, 0);
		this.showScrollToTop = false;
	}
}

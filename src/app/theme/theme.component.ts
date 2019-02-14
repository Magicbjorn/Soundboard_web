import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'app-theme',
    template: '',
    styleUrls: []
})
export class ThemeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document) { }

    ngOnInit() {
        this.setTheme();
    }

    setTheme(): void {
        const node = document.createElement('link');
        node.href = this.mapTheme(this.document.location.hostname);
        node.rel = 'stylesheet';
        node.id = 'theme';
        this.document.getElementsByTagName('head')[0].appendChild(node);
    }

    mapTheme(host): string {
        const themeMapper = require('./theme-mapper.json');
        return 'assets/css/' + themeMapper[host] + '.css';
    }
}

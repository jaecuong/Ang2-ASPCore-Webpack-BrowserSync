import { Component } from '@angular/core';

@Component({
    selector: 'faq-component',
    templateUrl: 'faq.component.html'
})

export class FaqComponent {

    public message: string;

    constructor() {
        this.message = 'Hello from FaqComponent constructor aaaaaaa';
    }
}

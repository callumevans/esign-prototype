import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'transition',
    templateUrl: 'transition.component.html',
    styleUrls: ['transition.component.css']
})

export class TransitionComponent implements OnInit, OnDestroy {
    loadingGifUrl = 'assets/transition.gif';

    timeout: any; //NodeJS.Timer;

    ngOnInit() {
        this.timeout = setTimeout(() => this.changePage(), 5000);
    }

    changePage(): void {
        location.href = '/home';
    }

    ngOnDestroy() {
        clearTimeout(this.timeout);
    }
}

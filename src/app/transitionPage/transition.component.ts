import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'transition',
    templateUrl: 'transition.component.html',
    styleUrls: ['transition.component.css']
})

export class TransitionComponent implements OnInit, OnDestroy {
    loadingGifUrl = 'assets/247loader_360.gif';

    timeout: any; //NodeJS.Timer;

    constructor(private router: Router) {

    }

    ngOnInit() {
        this.timeout = setTimeout(() => this.changePage(), 5000);
    }

    changePage(): void {
        this.router.navigate(['home']);
    }

    ngOnDestroy() {
        clearTimeout(this.timeout);
    }
}

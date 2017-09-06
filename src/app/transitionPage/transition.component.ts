import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'transition',
    templateUrl: 'transition.component.html'
})

export class TransitionComponent implements OnInit {
    loadingGifUrl = 'assets/transition.gif';

    ngOnInit() {
        const timer = Observable.timer(5000);
        timer.subscribe(t => {
            this.changePage();
        });
    }

    changePage(): void {
        location.href = '/home';
    }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'transition',
    templateUrl: 'transition.component.html',
    styleUrls: ['transition.component.css']
})

export class TransitionComponent implements OnInit {
    loadingGifUrl = 'assets/transition.gif';

    ngOnInit() {
        setTimeout(() =>
            this.changePage(), 5000);
    }

    changePage(): void {
        location.href = '/home';
    }
}

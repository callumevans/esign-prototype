import { Component } from '@angular/core';
import { LoremIpsum } from 'app/signAgreement/loremIpsum';

@Component({
  selector: 'sign-agreement',
  templateUrl: 'signAgreement.component.html',
  styleUrls: ['./signAgreement.style.css']
})

export class SignAgreementComponent {
  agreementBody = LoremIpsum.text;
  completeButtonEnabled = false;
  SECCIagreementComplete = false;
  TnCsagreementComplete = false;
  HPagreementComplete = false;
  DDMagreementComplete = false;
  timeout: any; // NodeJS.Timer;
  accordion: any;

  panelDelay = 750;

  complete(): void {
    if (this.completeButtonEnabled) {
      location.href = '/completeAgreement';
    }
  }

  setSECCIagreement(val, acc): void {
    this.SECCIagreementComplete = val;
    this.timeout = setTimeout(() => acc.toggle('tncPanel'), this.panelDelay);
  }

  setTnCsagreement(val, acc): void {
    this.TnCsagreementComplete = val;
    this.timeout = setTimeout(() => acc.toggle('hpPanel'), this.panelDelay);
  }

  setHPagreement(val, acc): void {
    this.HPagreementComplete = val;
    this.timeout = setTimeout(() => acc.toggle('ddmPanel'), this.panelDelay);
  }

  setDDMagreement(val): void {
    this.DDMagreementComplete = val;
    this.completeButtonEnabled = val;
  }
}

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
  panelDelay = 750;
  timeout: any;

  enableContinueButton(): void {
    this.completeButtonEnabled =
      this.SECCIagreementComplete &&
      this.TnCsagreementComplete &&
      this.HPagreementComplete &&
      this.DDMagreementComplete;
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

  setDDMagreement(val, acc): void {
    this.DDMagreementComplete = val;
    this.timeout = setTimeout(() => acc.toggle('ddmPanel'), this.panelDelay);
    this.completeButtonEnabled = val;
  }
}

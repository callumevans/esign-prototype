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

    complete(): void {
      if (this.completeButtonEnabled) {
        location.href = '/completeAgreement';
      }
    }

    setSECCIagreement(val): void {
      this.SECCIagreementComplete = val;
      this.enableContinueButton();
    }

    setTnCsagreement(val): void {
      this.TnCsagreementComplete = val;
      this.enableContinueButton();
    }

    setHPagreement(val): void {
      this.HPagreementComplete = val;
      this.enableContinueButton();
    }

    setDDMagreement(val, acc): void {
      this.DDMagreementComplete = val;
      this.enableContinueButton();
    }

    enableContinueButton(): void {
      this.completeButtonEnabled =
          this.SECCIagreementComplete &&
          this.TnCsagreementComplete &&
          this.HPagreementComplete &&
          this.DDMagreementComplete;
    }
}

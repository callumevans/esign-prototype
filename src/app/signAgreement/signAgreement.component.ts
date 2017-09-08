import { Component } from '@angular/core';
import { LoremIpsum } from 'app/signAgreement/loremIpsum';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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

  panelLock = true;

  public beforeChange($event: NgbPanelChangeEvent) {
    if (this.panelLock) {
      $event.preventDefault();
    }

    this.panelLock = true;
  }

  constructor(private modalService: NgbModal) {

  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  enableContinueButton(): void {
    this.completeButtonEnabled =
      this.SECCIagreementComplete &&
      this.TnCsagreementComplete &&
      this.HPagreementComplete &&
      this.DDMagreementComplete;
  }
  setSECCIagreement(val, acc): void {
    this.SECCIagreementComplete = val;
    this.panelLock = false;
    // this.timeout = setTimeout(() => acc.toggle('tncPanel'), this.panelDelay);
  }

  setTnCsagreement(val, acc): void {
    this.TnCsagreementComplete = val;
    this.panelLock = false;
    // this.timeout = setTimeout(() => acc.toggle('hpPanel'), this.panelDelay);
  }

  setHPagreement(val, acc): void {
    this.HPagreementComplete = val;
    this.panelLock = false;
    // this.timeout = setTimeout(() => acc.toggle('ddmPanel'), this.panelDelay);
  }

  setDDMagreement(val, acc): void {
    this.DDMagreementComplete = val;
    this.panelLock = false;
    // this.timeout = setTimeout(() => acc.toggle('ddmPanel'), this.panelDelay);
    this.completeButtonEnabled = val;
  }

  nextPanel(name: string, acc: any) {
    acc.toggle(name);
  }
}

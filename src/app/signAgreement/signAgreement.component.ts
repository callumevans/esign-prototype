import { Component } from '@angular/core';
import { LoremIpsum } from 'app/signAgreement/loremIpsum';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sign-agreement',
  templateUrl: 'signAgreement.component.html',
  styleUrls: ['./signAgreement.style.less']
})

export class SignAgreementComponent {
  agreementBody = LoremIpsum.text;
  completeButtonEnabled = false;
  SECCIagreementComplete = false;
  TnCsagreementComplete = false;
  HPagreementComplete = false;
  DDMagreementComplete = false;

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
    this.modalService.open(content);
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
  }

  setTnCsagreement(val, acc): void {
    this.TnCsagreementComplete = val;
    this.panelLock = false;
  }

  setHPagreement(val, acc): void {
    this.HPagreementComplete = val;
    this.panelLock = false;
  }

  setDDMagreement(val, acc): void {
    this.DDMagreementComplete = val;
    this.panelLock = false;
    this.completeButtonEnabled = val;
  }

  nextPanel(name: string, acc: any) {
    acc.toggle(name);
  }
}

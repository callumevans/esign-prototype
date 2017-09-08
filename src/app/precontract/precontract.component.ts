
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'precontract-component',
    templateUrl: './precontract.component.html',
    styleUrls: ['./precontract.component.css']
})

export class PrecontractComponent implements OnInit {
    precontractInfo: PrecontractInfo;

    constructor() { }

    ngOnInit() {
        this.precontractInfo = new PrecontractInfo();
        this.precontractInfo.creditor = 'Amigo Loans';
        this.precontractInfo.creditorAddress = '118-128 Commercial Road, Bournemouth, Dorset, BH2 5LT';
        this.precontractInfo.creditorNumber = '0161 616 16 16';
        this.precontractInfo.creditorEmail = 'info@amigoloans.co.uk';
        this.precontractInfo.creditorUrl = 'www.amigoloans.co.uk';

        this.precontractInfo.amountOfCredit = 0;
        this.precontractInfo.duration = 0;
        this.precontractInfo.monthlyRepayment = 0;
        this.precontractInfo.initialPaymentDate = null;
        this.precontractInfo.totalToRepay = 0;
        this.precontractInfo.deposit = 0;
        this.precontractInfo.initialPaymentDate = new Date();
        this.precontractInfo.adminFee = 0;
        this.precontractInfo.interest = 0;
        this.precontractInfo.optionToPurchaseFee = 0;

        this.precontractInfo.regNumber = 'KR65GJK';
        this.precontractInfo.vehicleDescription = 'It\'s a car';
        this.precontractInfo.chassisNumber = 'h57dhw783jdi39hdjk';
        this.precontractInfo.vehicleRegDate = new Date();
        this.precontractInfo.vehiclePrice = 0;
        this.precontractInfo.interestRate = 0;
        this.precontractInfo.hpApr = 0;
     }
}

class PrecontractInfo {
    creditor: string;
    creditorAddress: string;
    creditorNumber: string;
    creditorEmail: string;
    creditorUrl: string;

    amountOfCredit: number;
    duration: number;
    monthlyRepayment: number;
    initialPaymentDate: Date;
    totalToRepay: number;
    deposit: number;
    adminFee: number;
    interest: number;
    optionToPurchaseFee: number;
    regNumber: string;
    vehicleDescription: string;
    chassisNumber: string;
    vehicleRegDate: Date;
    vehiclePrice: number;
    interestRate: number;
    hpApr: number;
}

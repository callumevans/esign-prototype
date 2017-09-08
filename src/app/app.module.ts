import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app.routing';
import { HomeComponent } from 'app/home/home.component';
import { SignAgreementComponent } from 'app/signAgreement/signAgreement.component';
import { CompleteAgreementComponent } from 'app/complete/complete.component';
import { TransitionComponent } from 'app/TransitionPage/transition.component';
import { MembersDocumentsComponent } from 'app/members/documents/members-documents.component';
import { MembersHomeComponent } from 'app/members/home/members-home.component';
import { PrecontractComponent } from 'app/precontract/precontract.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignAgreementComponent,
    CompleteAgreementComponent,
    TransitionComponent,
    MembersHomeComponent,
    MembersDocumentsComponent,
    PrecontractComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

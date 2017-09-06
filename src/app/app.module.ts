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
import { MembersComponent } from 'app/members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignAgreementComponent,
    CompleteAgreementComponent,
    TransitionComponent,
    MembersComponent
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
